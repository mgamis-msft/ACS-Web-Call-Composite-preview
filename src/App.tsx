import { DEFAULT_COMPOSITE_ICONS } from "@azure/communication-react";
import { Stack, TextField, registerIcons } from "@fluentui/react";
import { useState } from "react";
import "./App.css";
import { ContosoCallContainer } from "./CallApp";

registerIcons({ icons: { ...DEFAULT_COMPOSITE_ICONS } });

function App() {
  const [token, setToken] = useState<string | undefined>();
  const [userId, setUserId] = useState<string | undefined>();
  const [locator, setLocator] = useState<string | undefined>('2AE7E2EE-9388-46D5-9822-CD65DC92FEA2');
  const [displayName, setDisplayName] = useState<string | undefined>();
  return (
    <Stack>
      <Stack>
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
          label="User ID"
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setUserId(newValue);
          }}
        />
        <TextField
          label="Locator (Teams link or Group ID)"
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setLocator(newValue);
          }}
          value={locator}
        />
        <TextField
          label="Display Name"
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
            newValue?: string
          ) => {
            setDisplayName(newValue);
          }}
        />
      </Stack>
      {displayName && userId && token && locator ? (
        <ContosoCallContainer
          displayName={displayName}
          userId={{
            communicationUserId: userId,
          }}
          token={token}
          locator={locator}
        />
      ) : (
        "*Please fill in all fields above to start call"
      )}
    </Stack>
  );
}

export default App;
