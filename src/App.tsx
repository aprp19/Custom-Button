import React from 'react';
import logo from './assets/icon/ic-correct.svg';
import './App.css';
import {Box, Container, Stack, Typography} from "@mui/material";
import {CustomButton} from "./components/custom-button";

/**
 * Main App component that renders a centered container with a custom button.
 * Demonstrates usage of the CustomButton component with various props including
 * icon positioning, tooltips, and click handling.
 *
 * @returns {JSX.Element} A React component that displays a centered custom button
 */

function App() {
  return (
    <Container>
        <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap: 1, height: '100vh' }}>
            <CustomButton
                variant={'contained'}
                backgroundColor={'success'}
                size={"medium"}
                iconSrc={logo}
                iconPosition="left"
                enableTooltip={true}
                tooltipText="Contoh Tooltip"
                tooltipPosition="left"
                onClick={() => console.log('clicked')}
            >
                Specified
            </CustomButton>
        </Stack>

    </Container>
  );
}

export default App;
