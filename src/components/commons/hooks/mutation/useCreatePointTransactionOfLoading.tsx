import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/type/generated/types";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
    }
  }
`;

export const useCreatePointTransactionOfLoading = () => {
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const CreatePointTransactionOfLoading = async (impUid: string) => {
    try {
      const result = await createPointTransactionOfLoading({
        variables: {
          impUid,
        },
        // 끝나고 바로 포인트 추가된 걸 받을 수 있게 제작(amount 더해서 추가된걸 반영)
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUserLoggedIn: (prev) => {
                if (prev && data?.createPointTransactionOfLoading.amount) {
                  return {
                    ...prev,
                    userPoint: {
                      amount:
                        prev.userPoint?.amount +
                        data?.createPointTransactionOfLoading.amount,
                    },
                  };
                }
              },
            },
          });
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    CreatePointTransactionOfLoading,
  };
};
