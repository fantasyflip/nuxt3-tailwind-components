export const useComponentReferUrl = (component, documentationType, item) => {
  const route = useRoute();
  return `/${route.params.locale}/component/${component}#${documentationType}-${item}`;
  //TODO add support for only component and documentationType
};
