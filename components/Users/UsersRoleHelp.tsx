import React from "react";
export interface IRoleUserPermission {
  functions: string;
  cluster: string;
  permissions: {
    admin: boolean;
    designer: boolean;
    marketing: boolean;
    user: boolean;
  };
}
const rolePermissions: IRoleUserPermission[] = [
  {
    functions: "Profile",
    cluster: "Profile",
    permissions: {
      admin: true,
      designer: true,
      marketing: true,
      user: true,
    },
  },
  {
    functions: "User Management",
    cluster: "Settings",
    permissions: {
      admin: true,
      designer: false,
      marketing: false,
      user: false,
    },
  },
  {
    functions: "Teams",
    cluster: "Settings",
    permissions: {
      admin: true,
      designer: false,
      marketing: false,
      user: false,
    },
  },
  {
    functions: "Branding",
    cluster: "Settings",
    permissions: {
      admin: true,
      designer: false,
      marketing: false,
      user: false,
    },
  },
  {
    functions: "Calendar",
    cluster: "Engagement",
    permissions: {
      admin: true,
      designer: true,
      marketing: true,
      user: true,
    },
  },
  {
    functions: "Meeting Room",
    cluster: "Engagement",
    permissions: {
      admin: true,
      designer: true,
      marketing: true,
      user: true,
    },
  },
  {
    functions: "Storybook",
    cluster: "Content",
    permissions: {
      admin: true,
      designer: true,
      marketing: true,
      user: true,
    },
  },
  {
    functions: "Scene",
    cluster: "Content",
    permissions: {
      admin: true,
      designer: true,
      marketing: true,
      user: true,
    },
  },
  {
    functions: "Scene Templates",
    cluster: "Content",
    permissions: {
      admin: true,
      designer: true,
      marketing: false,
      user: false,
    },
  },
  {
    functions: "Asset Library",
    cluster: "Content",
    permissions: {
      admin: true,
      designer: false,
      marketing: false,
      user: false,
    },
  },
];
const BsCheck = () => <>?</>;
const UsersRoleHelp = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="role-modal">
      <div className="modalBody">
        <div className="role-header">
          <div className="role-modal-close">
            <div>upegsh</div>
          </div>
          <h4>User Roles</h4>
        </div>

        <table>
          <tr>
            <td className="td-fun">Functions</td>
            <td className="td-fun">Cluster</td>

            <td className="td-str td-fun-first">Admin</td>
            <td className="td-str">Designer</td>
            <td className="td-str">Marketing</td>
            <td className="td-str">User</td>
          </tr>
          {rolePermissions?.map((role) => (
            <tr>
              <td className="td-fun">{role.functions}</td>
              <td className="td-fun">{role.cluster}</td>
              <td className="td-str td-fun-first">
                {role.permissions.admin && <BsCheck />}
              </td>
              <td className="td-str">
                {role.permissions.designer && <BsCheck />}
              </td>
              <td className="td-str">
                {role.permissions.marketing && <BsCheck />}
              </td>
              <td className="td-str">{role.permissions.user && <BsCheck />}</td>
            </tr>
          ))}
        </table>
      </div>
      <style jsx global>
        {`
          .role-modal-close {
            text-align: right;
            transform: translate(15px, -15px);
          }
          .role-header {
            width: 100%;
          }
          .role-modal .modalBody {
            display: flex;
            flex-wrap: wrap;
            padding: 0 !important;
            margin: 20px;
            width: 100%;
          }
          .role-modal .modalBody .td-fun {
            width: 22%;
            text-align: left;
          }
          .role-modal .modalBody .td-str {
            width: 7%;
            text-align: center !important;
          }
          .role-modal .modalBody table {
            border: 1px solid #dddddd;
            font-size: 0.9rem;
            width: 100%;
            background: white;
          }
          .role-modal .modalBody tr {
            border: 1px solid #dddddd;
          }
          .role-modal .modalBody td {
            background: unset;
          }
          .role-modal .modalBody .td-fun-first {
            border-left: 1px solid #dddddd;
          }
          .role-modal .modalBody .title {
            text-align: center !important;
            font-weight: 600;
            font-size: 1rem;
          }
          @media (max-height: 720px) {
            .role-modal .modalBody table {
              font-size: 0.5rem;
            }
          }
          @media (max-height: 520px) {
            .role-modal .modalBody table {
              height: max(50vh, 300px);
              display: block;
              overflow: auto !important;
              font-size: 0.5rem;
            }
            .role-modal h4 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UsersRoleHelp;
