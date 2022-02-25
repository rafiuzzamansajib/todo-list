import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import ListScreen from './screens/ListScreen';
import { colors, GlobalStyle } from './styles';
import { Task } from './types';

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background: ${colors.primary};
    color: #000;
  }
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <Layout>
            <Nav>
              <TabButton exact to="/" activeClassName="active">
                Items
              </TabButton>
            </Nav>


              <Route exact path="/">
                <ListScreen />
              </Route>
           
          </Layout>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
