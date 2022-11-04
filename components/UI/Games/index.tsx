import React from "react";
import { basePath } from "../../Assets";
import Header from "../Header";

const Games = () => {
  const [json, setJson] = React.useState<string[]>();
  React.useEffect(() => {
    fetch("https://hututusoftwares.com/list.php")
      .then((res) => res.json())
      .then((json) => {
        const games = [];
        for (const index in json) {
          games.push(json[index]);
        }
        console.log(games);
        setJson(games);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>Game List</h1>
      <div className="container h-100">
        {json && (
          <div className="game-list">
            {json?.map((game, i) => (
              <div key={i} className="game-title">
                <a href={`${basePath}${game}`} target="_blank">
                  {game.split("/")[1]}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>
        {`
            .game-list{
                display: flex;
                flex-wrap: wrap;
                overflow: auto;
                height: calc(100vh - 200px);
            }
            .game-title {
                width: 33%;
                margin: 5px 0px;
            }
            @media (max-width: 800px) {
                .game-title {
                    width: 50%;
                }
            }
            @media (max-width: 500px) {
                .game-title {
                    width: 100%;
                    
                }
            }
        `}
      </style>
    </>
  );
};

export default Games;
