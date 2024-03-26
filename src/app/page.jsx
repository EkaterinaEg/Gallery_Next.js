
import Login from "@/components/Login";


import {authenticateUser} from "@/actions/userActions";

export default function HomePage() {

  return (
    <main className="Page HomePage">
      <Login onSubmit={authenticateUser} />
    </main>
  );
}

// SSR - server-side rendering
//CSR - client-side rendering