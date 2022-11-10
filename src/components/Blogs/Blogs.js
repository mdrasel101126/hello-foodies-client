import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-center text-blue-900 my-10">
        There are some common Q & A
      </h1>
      <div className="my-4">
        <h1 className="text-2xl font-semibold  text-blue-900 my-4">
          Difference between SQL and NoSQ
        </h1>
        <h3>SQL:</h3>
        <ul className="list-disc ml-8">
          <li>
            A language used to communicate with databases for storage, deletion,
            updation, insertion and retrieval of data.
          </li>
          <li>SQL databases support Structured Query Languages.</li>
          <li> Supports table based data type.</li>
          <li>
            Vertically Scalable (Add resources to increase the capacity of the
            existing hardware and software).
          </li>
          <li>
            SQL supports predefined schemas, making the storage of data
            restrictive to structured type only.
          </li>
        </ul>
        <h3>NoSQL:</h3>
        <ul className="list-disc ml-8">
          <li>
            NoSQL databases are a type of software that allows to maintain and
            retrieve structured, unstructured, polymorphic data for different
            purposes.
          </li>
          <li>
            A software to retrieve, store and manage scalability of databases.
          </li>
          <li>NonSQL does not have any declarative query language.</li>
          <li>
            Supports document oriented, graph databases, key value pair-based.
          </li>
          <li>
            Horizontally Scalable (Changing small nodes with larger nodes to
            increase the capacity of the existing hardware and software).
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold  text-blue-900 my-4">
          What is JWT, and how does it work?
        </h1>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object.The purpose of
          using JWT is not to hide data but to ensure the authenticity of the
          data. JWT is signed and encoded, not encrypted.{" "}
        </p>
        <p>
          Basically the identity provider(IdP) generates a JWT certifying user
          identity and Resource server decodes and verifies the authenticity of
          the token using secret salt / public key.
        </p>
        <ul>
          <li>User sign-in using username and password or google/facebook.</li>
          <li>
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key.
          </li>
          <li>
            User's Client uses the JWT to access protected resources by passing
            the JWT in HTTP Authorization header.
          </li>
          <li>
            Resource server then verifies the authenticity of the token using
            the secret salt/ public key.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold  text-blue-900 my-4">
          What is the difference between javascript and NodeJS?
        </h1>
        <p>
          JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language. JavaScript is a simple programming language that can be used
          with any browser that has the JavaScript Engine installed. Node.js, on
          the other hand, is an interpreter or execution environment for the
          JavaScript programming language.Any engine may run JavaScript. As a
          result, writing JavaScript is incredibly easy, and any working
          environment is similar to a complete browser. Node.js, on the other
          hand, only enables the V8 engine. Written JavaScript code, on the
          other hand, can run in any context, regardless of whether the V8
          engine is supported.
        </p>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold  text-blue-900 my-4">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
