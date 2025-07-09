import React, { useMemo, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import CreateAccountForm from './caForm';
import { useHelper } from '../../../components/helper/helperContext.jsx';

import './caWindow.styles.css';

export default function CreateAccountWindow() {
  const [setCreate, setDidCreate] = useState(false);
  const [serverResponse, setServerResponse] = useState();
  const [helper, setHelper] = useState();
  const showHelper = useHelper();

  function closeWindow() {
    const createAccountPopupWindow = document.getElementById(
      'create-account-popup-window'
    );

    if (createAccountPopupWindow) {
      createAccountPopupWindow.style.display = 'none';
    }
  }

  useMemo(() => {
    if (helper) {
      showHelper(helper);
    }
    if (setCreate) {
      closeWindow();
      showHelper('New Account Created!');
    }
    if (serverResponse) {
      console.log('this is serverResponse:', serverResponse);
      if (serverResponse.status !== 201) {
        showHelper(serverResponse.data);
      }
    }
  }, [setCreate, serverResponse, helper]);

  return (
    <div id="create-account-popup-window">
      <div id="create-account-window-header">
        <h3 className="window-header">Create Account</h3>
        <CloseOutlined
          id="close-outline"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <CreateAccountForm
        setDidCreate={setDidCreate}
        setServerResponse={setServerResponse}
        setHelper={setHelper}
      />
    </div>
  );
}
