import EditorJS from "@editorjs/editorjs";
import editorjsCodeflask from "@calumk/editorjs-codeflask";
import { useEffect, useRef } from "react";

export default function Editor(props) {
  const { editorHolderId, data } = props;
  const isInstance = useRef(null);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: editorHolderId,
      readOnly: true,
      data: data,
      onReady: () => {
        isInstance.current = editor;
      },
      tools: {
        codeflask: editorjsCodeflask,
      },
    });
  };

  useEffect(() => {
    // console.log(isInstance.current);
    if (!isInstance.current && data) {
      // console.log("intiliase");
      initEditor();
    } else {
      isInstance.current.destroy();
      isInstance.current = null;
    }
    // return () => {
    //   if (isInstance.current) {

    //   }
    // };
  }, []);

  return <div id={editorHolderId}></div>;
}
