const unify = async requests => {
  try {
    const {data} = await requests;

    return data;
  } catch (errors) {
    return errors.response;
  }
};

export default unify;
