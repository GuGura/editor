import Page from "@/components/Layout/Page";
import { Title } from "@/components/editor/Title";
import Editor from "@/components/editor/Editor";

export default async function page() {
  return (
    <Page className={"block"}>
      <Title />
      <Editor />
    </Page>
  );
}
