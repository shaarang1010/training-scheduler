import { createSignal } from "solid-js";

import { GridContainer } from "../../components/layout/grid/GridContainer";
import { GridCol } from "../../components/layout/grid/Columns";
import { LogEntryForm } from "../../components/forms/log-entry/LogEntry";
import { useParams } from "@solidjs/router";
import { Color } from "../../types/color";
import { Modal } from "../../components/modal/Modal";
const LogEntryPage = () => {
  const { id } = useParams();
  const [eventName, setEventName] = createSignal<string>("");
  const [eventDate, setEventDate] = createSignal<string>(id);
  const [color, setColor] = createSignal<Color>("none");
  const [tags, setTags] = createSignal<string[]>([]);
  const [comments, setComments] = createSignal<string>("");
  return (
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-6">
        <LogEntryForm
          eventDate={eventDate}
          setEventName={setEventName}
          eventName={eventName}
          color={color}
          setColor={setColor}
          setComments={setComments}
          comments={comments}
          tags={tags}
          setTags={setTags}
          onSaveHandler={() => {}}
        />
      </div>
      <div class="col-span-12 md:col-span-6 mt-24 mx-12 cursor-pointer">
        <img
          class="h-auto max-w-xs"
          src="http://www.shapesense.com/images/blank-muscle-anatomy.jpg"
          alt="image description"
          data-modal-target="body-mapping-modal"
          data-modal-toggle="body-mapping-modal"
        />
      </div>
      <div class="col-span-6 md:col-span-8">
        <button
          type="submit"
          class="text-white bg-blue-700 mx-12 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
      <Modal />
    </div>
  );
};

export default LogEntryPage;
