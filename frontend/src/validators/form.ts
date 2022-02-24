import _ from "lodash";
import { reactive, ref } from "vue";

const FormValidation = () => {
  const errors = ref();

  const has = (field) =>
    !!_.find(errors.value, (error) => error.path[0] === field);

  const any = () => Object.keys(errors.value).length > 0;

  const get = (field) =>
    _.find(errors.value, (error) => error.path[0] === field);

  const record = (data) => (errors.value = data);

  const clear = (field) => {
    if (field) {
      errors.value = _.filter(errors.value, (error) => error.path[0] !== field);
    } else {
      errors.value = [];
    }
  };

  const parseApiErrorAndRecord = (error) => {
    const errorObject = [];
    error.response.data.errors.map((e) => {
      errorObject.push({
        path: [e.field],
        message: e.message,
      });
    });
    record(errorObject);
  };

  return reactive({
    has,
    any,
    get,
    record,
    parseApiErrorAndRecord,
    clear,
  });
};

export default FormValidation();
