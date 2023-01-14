import React, { useReducer } from "react";
import {
  Button,
  Container,
  Image,
  Inputs,
  Table,
  TableD,
  TableH,
  TableR,
} from "../Styles/style";
import Dataes from "../Utilities/mini_Backend";
import Images2 from "../Assets/Pencil.png";
import Images3 from "../Assets/Container.png";

const Hooks = () => {
  const reduce = (state, action) => {
    switch (action.type) {
      // delete function
      case "delete":
        return {
          ...state,
          Dataes: state.Dataes.filter((v) => v.id !== action.payload),
        };
      // add function
      case "setAdd": {
        return {
          ...state,
          add: {
            ...state.add,
            [action.payload.name]: action.payload.value,
          },
        };
      }
      case "add": {
        return {
          ...state,
          Dataes: [...state.Dataes, state.add],
          add: {
            id: "",
            username: "",
            email: "",
            ip: "",
            time: "",
            login: "",
            confirmation: "",
          },
        };
      }
      // edit function
      case "edit": {
        return {
          ...state,
          add: state.Dataes.filter((v) => v.id == action.payload)[0],
          update: true,
        };
      }
      // cancel
      case "cancel": {
        return {
          ...state,
          update: false,
          add: {
            id: "",
            username: "",
            email: "",
            ip: "",
            time: "",
            login: "",
            confirmation: "",
          },
        };
      }
    }
  };
  const [state, dispatch] = useReducer(reduce, {
    Dataes: Dataes,
    add: {},
    update: false,
  });
  return (
    <>
      <Container>
        {" "}
        <Table>
          <thead>
            <TableR>
              <TableH>Id</TableH>
              <TableH>Username</TableH>
              <TableH>Email</TableH>
              <TableH>Registration ip</TableH>
              <TableH>Registration Time</TableH>
              <TableH>Last Login</TableH>
              <TableH>Confirmation</TableH>
              <TableH>Block Status</TableH>
              <TableH></TableH>
            </TableR>
          </thead>
          <tbody>
            <TableR>
              <TableD>
                <Inputs
                  type={"number"}
                  name="id"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.id}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  type={"text"}
                  user
                  name="username"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.username}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  type={"email"}
                  email
                  name="email"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.email}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  type={"number"}
                  ip
                  name="ip"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.ip}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  time
                  name="time"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.time}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  login
                  name="login"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.login}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  confirmation
                  name="confirmation"
                  onChange={({ target }) =>
                    dispatch({ type: "setAdd", payload: target })
                  }
                  value={state.add.confirmation}
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs status></Inputs>
              </TableD>
              <TableD>
                {state.update ? (
                  <>
                    {" "}
                    <Button>Edit</Button>
                    <Button onClick={() => dispatch({ type: "cancel" })}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => dispatch({ type: "add" })}>Add</Button>
                )}
              </TableD>
            </TableR>
            {state.Dataes.map((v) => {
              return (
                <TableR key={v.id}>
                  <TableD>{v.id}</TableD>
                  <TableD>{v.username}</TableD>
                  <TableD>{v.email}</TableD>
                  <TableD>{v.ip}</TableD>
                  <TableD>{v.time}</TableD>
                  <TableD>{v.login}</TableD>
                  <TableD confirmed>{v.confirmation}</TableD>
                  <TableD>
                    <Button>Block</Button>
                  </TableD>
                  <TableD>
                    <Image
                      src={Images2}
                      onClick={() => dispatch({ type: "edit", payload: v.id })}
                    />
                    <Image
                      onClick={() =>
                        dispatch({ type: "delete", payload: v.id })
                      }
                      src={Images3}
                    />
                  </TableD>
                </TableR>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Hooks;
