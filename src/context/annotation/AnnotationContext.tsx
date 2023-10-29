import {
  Accessor,
  Component,
  Setter,
  createEffect,
  createSignal,
  onCleanup,
  JSX,
  createContext,
  useContext,
} from "solid-js";
import { Annotorious } from "@recogito/annotorious";
import "@recogito/annotorious/dist/annotorious.min.css";

type AnnotationProps = {
  annotation: Accessor<unknown>;
  setAnnotation: Setter<unknown>;
  imgRef: HTMLImageElement | undefined;
  children?: JSX.Element;
};

const AnnotationContext = createContext<AnnotationProps>();

export const useAnnotation = () => useContext(AnnotationContext)!;

export const AnnotationProvider: Component<{ children: JSX.Element }> = (
  props
) => {
  // Ref to the image DOM element
  let imgRef: HTMLImageElement | undefined;

  // The current Annotorious instance
  const [annotation, setAnnotation] = createSignal();

  // Current drawing tool name
  const tool = createSignal("rect");

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  createEffect(() => {
    //@ts-expect-error TS2532
    let annotorious = null;

    if (imgRef) {
      // Init
      annotorious = new Annotorious({
        image: imgRef,
      });

      // Attach event handlers here
      //@ts-expect-error TS2532
      annotorious.on("createAnnotation", (annotation) => {
        console.log("created", annotation);
      });

      //@ts-expect-error TS2532
      annotorious.on("updateAnnotation", (annotation, previous) => {
        console.log("updated", annotation, previous);
      });

      //@ts-expect-error TS2532
      annotorious.on("deleteAnnotation", (annotation) => {
        console.log("deleted", annotation);
      });
    }

    annotorious.setDrawingTool(tool);

    // Keep current Annotorious instance in state
    setAnnotation(annotorious);

    // Cleanup: destroy current instance
    //@ts-expect-error TS2532
    onCleanup(() => annotorious.destroy());
  });

  return (
    <AnnotationContext.Provider value={{ annotation, setAnnotation, imgRef }}>
      {props.children}
    </AnnotationContext.Provider>
  );
};
