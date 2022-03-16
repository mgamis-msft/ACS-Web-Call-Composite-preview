import { DEFAULT_COMPONENT_ICONS } from "@azure/communication-react";
import { Stack, TextField, registerIcons } from "@fluentui/react";
import { useState } from "react";
import "./App.css";
import { ContosoCallContainer } from "./CallApp";

registerIcons({ icons: { ...DEFAULT_COMPONENT_ICONS }});

function App() {
  const [displayName, setDisplayName] = useState<string | undefined>();
  const [userId, setUserId] = useState<string | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [locator, setLocator] = useState<string | undefined>();
  return (
    <Stack>
      <Stack>
        <TextField
          label="Display Name"
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setDisplayName(newValue);
          }}
        />
        <TextField
          label="User ID"
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setUserId(newValue);
          }}
        />
        <TextField
          label="Token"
          type="Password"
          canRevealPassword
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setToken(newValue);
          }}
        />
        <TextField
          label="Locator"
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setLocator(newValue);
          }}
        />
      </Stack>
      {displayName && userId && token && locator ? (
        <ContosoCallContainer
          displayName={displayName}
          userId={{
            communicationUserId: userId
          }}
          token={token}
          locator={locator}
        />
      ) : "Fill in all fields"}
    </Stack>
  );
}

export default App;
