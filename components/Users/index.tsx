export default function User() {
  return (
    <div className="role-modal">
      <div className="modalBody">
        <div className="role-header">
          <div className="role-modal-close">
            <div>User</div>
          </div>
          <h4>User Roles</h4>
        </div>
        <table key={"table"}>
          <tbody>
            <tr>
              <td className="td-fun">Functions</td>
              <td className="td-fun">Cluster</td>
              <td className="td-str td-fun-first">Admin</td>
              <td className="td-str">Designer</td>
              <td className="td-str">Marketing</td>
              <td className="td-str">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
