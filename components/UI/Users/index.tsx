import React from "react";
import { IUser } from "../../../interfaces";
import { logoImg } from "../../Assets";
import { getUserList } from "../../services/geolocation";

const Users = () => {
  const [users, setUsers] = React.useState<IUser[]>();
  const getData = async () => {
    const _users = await getUserList();
    console.log(_users);
    setUsers(_users);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-">
      <div className="games prevent-select">
        {users &&
          users.map((user: IUser) => (
            <>
              <div className="flex-row">
                <div className="user-image">
                  <img className="member-img rounded-circle" src={logoImg} />
                </div>
                <div className="user-name">
                  <label>{user.name}</label>
                  <label className="email-text">{user.email}</label>
                </div>
                
              </div>
            </>
          ))}
      </div>
      <style>{`
      .container{

      }
            .games{
                
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            .flex-row{
                justify-content: flex-start;
                width: 18%;
                margin: 10px;
                border-radius: 8px;
                box-shadow: 0px 0px 20px #fff5;
            }
            .user-image{
                
            }
            .user-name{
                width:33%;
            }
            .user-email{
                width:50%;

            }
            @media (max-width: 2000px) {
                .flex-row{
                    width: 30%;
                }
            }
            @media (max-width: 1200px) {
                .flex-row{
                    width: 40%;
                }
            }
            @media (max-width: 500px) {
                .flex-row{
                    width: 100%;
                }
            }
            `}</style>
    </div>
  );
};

export default Users;
