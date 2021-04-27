import { FC } from "react";
import handler from "../../../pages/api/users";



export const Card: FC<{ id: number; login: string; avatar_url: string }> = ({
  id,
  login,
  avatar_url,
}) => {
  return (
    <div className="card shadow-sm">
      <img src={avatar_url} />
      <div className="card-body">
        <p className="card-text">{login}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button onclick="alert('login')" type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  );
};
