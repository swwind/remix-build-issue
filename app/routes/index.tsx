import { Prism } from "react-syntax-highlighter";
import light from "react-syntax-highlighter/dist/cjs/styles/prism/prism";

const code = `fn main() {
  println!("Hello, world!");
}
`;

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Prism language="rust" style={light}>{code}</Prism>
    </div>
  );
}
