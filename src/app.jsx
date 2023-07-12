import './app.css';
import { useState } from 'preact/hooks';
import {Button, ThemeProvider, TaskBar, Modal, List } from '@react95/core';
import { Computer, WindowsExplorer, Logo } from '@react95/icons';
import '@react95/icons/icons.css';

export function App() {
  const [first, toggleFirst] = useState(false);
  const [second, toggleSecond] = useState(false);
  const [third, toggleThird] = useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);
  const closeThird = () => toggleThird(false);

  return (
    <>
      <div>
        <h1>Preact 95!</h1>
        <ThemeProvider>
        <Logo variant="32x32_4" />
        <br></br>
          {first && (
            <Modal
              icon={<WindowsExplorer variant="16x16_4" />}
              title="Windows Explorer"
              closeModal={closeFirst}
              width="300"
              height="200"
            >
             <Button onClick={() => window.open('https://github.com/markmental', '_blank')}>
                mark's GitHub
             </Button>
            </Modal>
          )}

          {second && (
            <Modal
              defaultPosition={{ x: 50, y: 50 }}
              width="300"
              height="200"
              icon={<Computer variant="16x16_4" />}
              title="About this PC"
              closeModal={closeSecond}
            >
             <p>This was made by <a href="https://github.com/markmental" target="_blank">mark</a></p>
             <p>Its Windows 95 in Preact/React!</p>
            </Modal>
          )}

          {third && (
            <Modal
              defaultPosition={{ x: 50, y: 50 }}
              width="300"
              height="280"
              icon={<Logo variant="16x16_4" />}
              title="Help"
              closeModal={closeThird}
            >
             <p>This is a template app built using Preact JS and the React95 library for component templates.</p>
             Here's a Music Video by JP virtual singer Kasane Teto 🥖
             <div><a href="https://www.youtube.com/watch?v=JALbemLw3G4" target="_blank"><img width="125" src="https://i.pinimg.com/736x/5f/34/d7/5f34d78334f783d00d1e2b16ce3b32c9.jpg" alt="Kasane Teto" /></a></div>
            </Modal>
          )}

          <TaskBar
          startMenu={<span>Preact</span>}
            list={
              <List>
                <List.Item
                  icon={<Computer variant="32x32_4" />}
                  onClick={() => toggleSecond(true)}
                >
                  About this PC
                </List.Item>
                <List.Item
                  icon={<WindowsExplorer variant="32x32_4" />}
                  onClick={() => {
                    toggleFirst(true);
                  }}
                >
                  Windows Explorer
                </List.Item>
                <List.Item
                  icon={<Logo variant="32x32_4" />}
                  onClick={() => {
                    toggleThird(true);
                  }}
                >
                  Help
                </List.Item>
              </List>
            }
          />
        </ThemeProvider>
      </div>
    </>
  );
}
