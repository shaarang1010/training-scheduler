import { createSignal } from "solid-js";

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
    <div class="lg:max-w-screen-xl mx-auto">
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
        <Modal />
      </div>
    </div>
  );
};

export default LogEntryPage;
