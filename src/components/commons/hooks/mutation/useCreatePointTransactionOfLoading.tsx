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
