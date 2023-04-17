import useAsync from "../useAsync";
import * as wordApi from "../../services/wordsApi";

export default function useGetWords() {
  const {
    loading: getWordsLoading,
    error: getWordsError,
    act: getWords,
  } = useAsync(wordApi.getWords, false);

  return {
    getWordsLoading,
    getWordsError,
    getWords,
  };
}
