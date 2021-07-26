import videoResponseEnum from "../../utils/enums/videoResponseEnum.js";

const videoValidator = {
  addValidator(course_id, title, video) {
    if (!course_id) {
      return {
        code: videoResponseEnum.COURSE_ID_IS_EMPTY
      };
    }
    if (!title) {
      return {
        code: videoResponseEnum.TITLE_IS_EMPTY
      };
    }
    if (!video) {
      return {
        code: videoResponseEnum.VIDEO_IS_EMPTY
      };
    }
    return {
      code: videoResponseEnum.VALIDATOR_IS_SUCCESS
    };
  },
}

export default videoValidator;