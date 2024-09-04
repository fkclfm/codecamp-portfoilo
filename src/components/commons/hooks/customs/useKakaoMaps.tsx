import { useEffect, useState } from "react";
import { useFetchItem } from "../query/useFetchItem";

declare const window: typeof globalThis & {
  kakao: any;
};

export const useKakaoMaps = () => {
  const { data } = useFetchItem();
  const [lat, setLat] = useState<number>(0); // 클릭한 위치의 위도 상태
  const [lng, setLng] = useState<number>(0); // 클릭한 위치의 경도 상태
  const [roadAddress, setRoadAddress] = useState(""); // 도로명 주소 상태
  const [landAddress, setLandAddress] = useState(""); // 지번 주소 상태
  // HTML에서 태그를 제거하고 텍스트만 추출하는 함수
  function stripHtmlTags(html: string): string {
    return html.replace(/<\/?[^>]+>/gi, "");
  }

  // Kakao 지도를 초기화하고 클릭 이벤트를 설정하는 커스텀 훅
  const useClickKakaoMap = () => {
    useEffect(() => {
      // Kakao 지도 API를 불러오는 스크립트를 생성합니다.
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=df7890d83008dd8065a5509bd693fd7e&autoload=false&libraries=services";
      document.head.appendChild(script);

      script.onload = () => {
        // 스크립트 로드가 완료되면 지도와 관련된 설정을 초기화합니다.
        window.kakao.maps.load(() => {
          // 지도 표시를 위한 div 요소를 가져옵니다.
          const mapContainer = document.getElementById("map");
          if (!mapContainer) {
            console.error("Map container not found");
            return;
          }

          // 지도 옵션을 설정합니다.
          const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
            level: 3, // 지도 확대 레벨
          };

          // 지도를 생성합니다.
          const map = new window.kakao.maps.Map(mapContainer, mapOption);
          const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성

          // 지도의 중심에 마커를 추가합니다.
          const marker = new window.kakao.maps.Marker({
            position: map.getCenter(),
          });

          // 클릭한 위치에 대한 주소를 표시할 인포윈도우를 생성합니다.
          // const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });

          // 지도 초기화 시 중심 좌표의 주소 정보를 표시합니다.
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
          marker.setMap(map);

          // 지도 중심 좌표가 변경될 때 주소 정보를 업데이트합니다.
          window.kakao.maps.event.addListener(map, "idle", () => {
            searchAddrFromCoords(map.getCenter(), displayCenterInfo);
          });

          // 좌표를 이용해 주소 정보를 요청합니다.
          function searchAddrFromCoords(coords: any, callback: any) {
            geocoder.coord2RegionCode(
              coords.getLng(),
              coords.getLat(),
              callback
            );
          }

          // 좌표를 이용해 상세 주소 정보를 요청합니다.
          function searchDetailAddrFromCoords(coords: any, callback: any) {
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
          }

          // 지도 중심 좌표의 주소 정보를 표시하는 함수
          function displayCenterInfo(result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const infoDiv = document.getElementById("centerAddr");
              if (!infoDiv) return;

              for (let i = 0; i < result.length; i++) {
                if (result[i].region_type === "H") {
                  infoDiv.innerHTML = stripHtmlTags(result[i].address_name);
                  break;
                }
              }
            }
          }

          // 지도 클릭 시 클릭한 위치의 상세 주소 정보를 요청하고 표시합니다.
          window.kakao.maps.event.addListener(
            map,
            "click",
            (mouseEvent: any) => {
              searchDetailAddrFromCoords(
                mouseEvent.latLng,
                (result: any, status: any) => {
                  if (status === window.kakao.maps.services.Status.OK) {
                    // 도로명 주소와 지번 주소 HTML을 생성합니다.
                    const roadAddressHtml = result[0].road_address
                      ? `<div>${result[0].road_address.address_name}</div>`
                      : "";
                    const landAddressHtml = `<div>${result[0].address.address_name}</div>`;

                    // HTML에서 텍스트만 추출합니다.
                    const roadAddressText = stripHtmlTags(roadAddressHtml);
                    const landAddressText = stripHtmlTags(landAddressHtml);

                    // 인포윈도우에 표시할 내용을 구성합니다.
                    // const content = `
                    //   <div class="bAddr">
                    //     <span class="title">법정동 주소정보</span>
                    //     ${roadAddressText ? roadAddressText + "<br>" : ""}
                    //     ${landAddressText}
                    //   </div>`;

                    // 클릭한 위치에 마커와 인포윈도우를 표시합니다.
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);
                    // infowindow.setContent(content);
                    // infowindow.open(map, marker);

                    // 클릭한 위치의 위도와 경도를 상태에 저장합니다.
                    const latlng = mouseEvent.latLng;
                    setLat(latlng.getLat());
                    setLng(latlng.getLng());
                    setRoadAddress(roadAddressText);
                    setLandAddress(landAddressText);

                    // 클릭한 위치의 위도와 경도를 메시지로 표시합니다.
                    // const message = `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`;

                    // const resultDiv = document.getElementById("clickLatlng");
                    // if (resultDiv) {
                    //   resultDiv.innerHTML = message;
                    // }

                    console.log(roadAddressText); // 도로명 주소 출력
                    console.log(landAddressText); // 지번 주소 출력
                  }
                }
              );
            }
          );
        });
      };
    }, []);
  };

  const useKakaoDetail = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=df7890d83008dd8065a5509bd693fd7e&autoload=false";
      document.head.appendChild(script);
      script.onload = () => {
        window.kakao.maps.load(function () {
          if (
            data?.fetchUseditem.useditemAddress?.lat &&
            data?.fetchUseditem.useditemAddress?.lng
          ) {
            const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
            const options = {
              // 지도를 생성할 때 필요한 기본 옵션
              center: new window.kakao.maps.LatLng(
                data.fetchUseditem.useditemAddress.lat,
                data.fetchUseditem.useditemAddress.lng
              ), // 지도의 중심좌표.
              level: 3, // 지도의 레벨(확대, 축소 정도)
            };
            const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴4

            // 마커가 표시될 위치입니다
            const markerPosition = new window.kakao.maps.LatLng(
              data.fetchUseditem.useditemAddress.lat,
              data.fetchUseditem.useditemAddress.lng
            );
            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            const iwContent = `<div style="padding:5px;"><a href="https://map.kakao.com/link/map/${
              data.fetchUseditem.useditemAddress.addressDetail ?? "목적지"
            },${data.fetchUseditem.useditemAddress.lat}
            ,${
              data.fetchUseditem.useditemAddress.lng
            }" style="color:blue" target="_blank">
            큰지도보기</a> <a href="https://map.kakao.com/link/to/${
              data.fetchUseditem.useditemAddress.address ?? "목적지"
            },${data.fetchUseditem.useditemAddress.lat},${
              data.fetchUseditem.useditemAddress.lng
            }" 
            style="color:blue" target="_blank">길찾기</a></div>`;

            const iwPosition = new window.kakao.maps.LatLng(
              data.fetchUseditem.useditemAddress.lat,
              data.fetchUseditem.useditemAddress.lng
            ); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              position: iwPosition,
              content: iwContent,
            });

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
          } else {
            // 거래 위치 정보가 없는 경우 처리
            console.log("거래 위치 정보가 없습니다.");
          }
        });
      };
    }, [data]);
  };

  return {
    useClickKakaoMap,
    useKakaoDetail,
    lat,
    lng,
    roadAddress,
    landAddress,
  };
};
