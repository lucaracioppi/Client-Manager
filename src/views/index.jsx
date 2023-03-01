import { useLoaderData } from "react-router-dom";
import { getClients } from "../data/clients";
import Clients from "../components/Clients";

export function loader() {
  const clients = getClients();
  return clients;
}

function Index() {
  const clients = useLoaderData();
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clients</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <Clients client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No clients yet</p>
      )}
    </div>
  );
}

export { Index };
