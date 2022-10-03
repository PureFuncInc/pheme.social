const upperCaseList = (stringList: string[]) => stringList.map(
  (string: string) => string.toUpperCase(),
);
const typesBuilder = (keys: string[]) => keys.map((key: string) => ({ [key]: key }));

const apiTypeListBuilder = (key: string) => [
  key,
  `${key}_FETCHING`,
  `${key}_SUCCESS`,
  `${key}_FAILED`,
];
const apiTypesBuilder = (apiNameList: string[]) => apiNameList.map(
  (apiName: string) => apiTypeListBuilder(apiName),
);

function mergeElems(elems: object[]): [];
function mergeElems(elems: [][]): [];
function mergeElems(elems: (object | [])[] = []) {
  return elems.reduce(
    (prev, next) => {
      if (Array.isArray(prev) && Array.isArray(next)) {
        return [...prev, ...next];
      }
      return { ...prev, ...next };
    },
  );
}

export const createType = (typeList:string[] = ['']) => (
  mergeElems(typesBuilder(upperCaseList(typeList)))
);

export const createApiType = (typeList:string[] = ['']) : any => (
  createType(mergeElems(apiTypesBuilder(typeList)))
);

export const createApiMutationTypes = (apiType: string) => ({
  requesting: `${apiType}_FETCHING`,
  success: `${apiType}_SUCCESS`,
  error: `${apiType}_FAILED`,
});
