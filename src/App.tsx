import { useRef } from "react";
import "./App.scss";
import {
  Checkbox,
  HelperText,
  Icon,
  RadioButton,
  Select,
  Spinner,
  Textarea,
  Button,
  Label,
  Divider,
  Image,
} from "./components";

function App() {
  const selectRef = useRef<HTMLSpanElement>(null);
  return (
    <>
      <Button
        variant="secondary"
        type={"button"}
        textualContent={"AAAA"}
      ></Button>

      <Label htmlFor="date" textualContent="Date Label"></Label>
      <input type="date" name="date" id="date" />
      <div style={{ width: "25%" }}>
        <Textarea name={"textara"} rows={5}></Textarea>
      </div>
      <div style={{ width: "25%" }}>
        <Checkbox labelContent="CB Label" id="checkbox"></Checkbox>
      </div>
      <div style={{ width: "25%" }}>
        <RadioButton id="RB" label="Man" name="sex" value="Man"></RadioButton>

        <RadioButton
          id="RB"
          label="Woman"
          name="sex"
          value="Woman"
        ></RadioButton>
      </div>
      <p>
        Selected Language: <span ref={selectRef}>Not Selected</span>
      </p>
      <div style={{ width: "25%" }}>
        <Select
          name="FE Languages"
          onChange={(e) =>
            (selectRef.current!.innerHTML = e.currentTarget.value)
          }
          options={[
            { label: "Angular", value: "Angular" },
            { label: "React", value: "React" },
            { label: "Vue", value: "Vue" },
          ]}
        ></Select>
      </div>
      <div style={{ width: "25%" }}>
        <HelperText variant="error">Warning</HelperText>
        <HelperText variant="info">Info</HelperText>
      </div>
      <div style={{ width: "25%" }}>
        <Icon name={"amazon"}></Icon>
      </div>
      <div
        style={{
          width: "25%",
          height: "200px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Divider></Divider>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Spinner></Spinner>
      </div>
      <Image
        src={"https://picsum.dev/300/200"}
        alt={"Lorem Picsum Alt"}
      ></Image>
    </>
  );
}

export default App;
