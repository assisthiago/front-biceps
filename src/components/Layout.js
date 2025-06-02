import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return (
    <>
      <h1>header</h1>
      {children}
      <h1>footer</h1>
    </>
  )
}
