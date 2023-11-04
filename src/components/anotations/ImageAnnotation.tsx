import { Annotorious } from "@recogito/annotorious";
import { createEffect, createSignal, onCleanup } from "solid-js";
import HumanMuscularSkeleton from "../../assets/blank-muscle-anatomy.jpg";
import "@recogito/annotorious/dist/annotorious.min.css";

export const ImageAnnotation = () => {
  // Ref to the image DOM element
  let imgRef: HTMLImageElement | undefined;

  // The current Annotorious instance
  const [anno, setAnno] = createSignal();

  // Current drawing tool name
  const [tool, setTool] = createSignal("rect");

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

    annotorious.setDrawingTool(tool());

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    //@ts-expect-error TS2532
    onCleanup(() => annotorious.destroy());
  });

  const onSave = () => {
    //@ts-expect-error TS2532
    anno().saveSelected();
    //@ts-expect-error TS2532
    console.log(anno().getAnnotations());
  };

  return (
    <div>
      <div class="flex flex-row justify-between">
        <h3 class="font-lg font-bold">R</h3>
        <h3 class="font-lg font-bold ml-4">L</h3>
        <h3 class="font-lg font-bold">R</h3>
      </div>
      <img ref={imgRef} src={HumanMuscularSkeleton} alt="Colossal titan" />
    </div>
  );
};
