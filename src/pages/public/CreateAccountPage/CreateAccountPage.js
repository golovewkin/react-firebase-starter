import React, { useState } from "react";
// import { AuthService } from "../../../services/AuthService";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import MainContext from "../../../contexts/main.context";
import { commonConst } from "../../../constants/commonConst";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { LogService } from "../../../services/LogService";
import { urlsConst } from "../../../constants/urlsConst";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";

const CreateAccountPage = () => {
  // const history = useHistory();
  const history = {};
  const { user } = React.useContext(MainContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const createAccount = () => {
    // AuthService.createFirebaseAccount(state.email, state.password, history);
  };

  const isDisabled = (state) => {
    try {
      if (!validEmail(state.email)) return true;
      if (!validPassword(state.password)) return true;
      return false;
    } catch (e) {
      LogService.logError("isDisabled error", e);
      return true;
    }
  };

  if (user) {
    return <span>{commonConst.error}</span>;
  }

  return (
    <div className="CreateAccountPage">
      <div className="CreateAccountPage__title">Create account</div>
      <div className="CreateAccountPage__wrapper">
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <TextFieldComponent
          onChange={(value) => setFormState("password", value, setState)}
          value={state.password}
          type="password"
          label="password"
          error={!validPassword(state.password)}
        />
        <ButtonComponent disabled={isDisabled(state)} onClick={createAccount}>
          Create Account
        </ButtonComponent>
        <div className="CreateAccountPage__links">
          <LinkComponent to={urlsConst.login} children="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
