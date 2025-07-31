import { useRef, useState } from "react";
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
  Badge,
  Tag,
  Switch,
  Tooltip,
  Avatar,
  Text,
  ProgressBar,
  Heading,
  StatusDot,
  IconButton,
  InputField,
  Card,
  Alert,
  SearchBar,
  RadioGroup,
  DropdownMenu,
  AvatarAndName,
  ProductCard,
  LoginForm,
  FormField,
  CheckboxGroup,
  ModalTrigger,
} from "./components";

function App() {
  const selectRef = useRef<HTMLSpanElement>(null);
  const [InputTextError, setInputTextError] = useState<string>("");
  const [InputTextContent, setInputTextContent] = useState<string>("");
  const [SelectedRadio, setSelectedRadio] = useState<string>("");
  const [SelectedDropdownMenu, setSelectedDropdownMenu] = useState<string>("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
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
      <div
        style={{
          width: "25%",
        }}
      >
        <Image
          src={"https://picsum.dev/300/200"}
          alt={"Lorem Picsum Alt"}
          rounded
        ></Image>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Badge variant="success">Order Confirmed</Badge>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Tag text="Close" onRemove={() => {}}></Tag>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Switch
          onChange={() => {
            console.log("Switched");
          }}
        ></Switch>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Tooltip text="Tooltip">
          <span>TextTextTextTextText</span>
        </Tooltip>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Avatar alt={"Picsum"} src="https://picsum.dev/300"></Avatar>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          culpa tenetur reprehenderit adipisci doloremque rerum dignissimos, ad
          facilis quasi nihil blanditiis voluptates dolorum fuga praesentium
          illo aut optio. Sapiente, vel?
        </Text>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Heading level={1}>Title</Heading>
      </div>
      <ProgressBar value={50}></ProgressBar>
      <StatusDot status="online"></StatusDot>
      <IconButton ariaLabel="Amazon Icon" icon="Press"></IconButton>
      <div
        style={{
          width: "25%",
        }}
      >
        <InputField
          type="text"
          placeholder="Name"
          label="Name"
          value={InputTextContent}
          error={InputTextError}
          onChange={(e) => {
            if (e.length > 10) {
              setInputTextError("The length is above 10 characters");
              setInputTextContent("");
            } else if (
              e.includes("<>") ||
              e.includes("</>") ||
              e.includes("<script>")
            ) {
              setInputTextError("This content is prohibited");
              setInputTextContent("");
            } else {
              setInputTextContent(e);
            }
          }}
        ></InputField>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Card>
          <Avatar alt={"Picsum"} src="https://picsum.dev/300"></Avatar>
          <Heading level={1}>Avatar</Heading>
          <Text color="orange" size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            necessitatibus placeat obcaecati quod, iste molestiae amet unde
            veniam temporibus adipisci est eligendi libero. Vel officiis ea
            dolores alias. Voluptatum, cumque.
          </Text>
        </Card>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <Alert message="Product bought!" type="success"></Alert>
        <Alert
          message="There was an error while confirming the order"
          type="error"
        ></Alert>
        <Alert message="Please use a stronger password" type="info"></Alert>
        <Alert
          message="This password is strong enough, but you should use special characters too"
          type="warning"
        ></Alert>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <SearchBar
          onChange={(e) => {
            console.log("Search Term: ", e);
          }}
        ></SearchBar>
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <RadioGroup
          selectedValue={SelectedRadio}
          options={[
            { label: "Angular", value: "Angular" },
            { label: "React", value: "React" },
            { label: "Vue", value: "Vue" },
          ]}
          name="Preferred FE Language"
          onChange={(e) => {
            setSelectedRadio(e);
          }}
        ></RadioGroup>
      </div>
      <DropdownMenu
        options={[
          { label: "Home", value: "Home" },
          { label: "Profile", value: "Profile" },
        ]}
        selected={SelectedDropdownMenu}
        onSelect={(e) => {
          setSelectedDropdownMenu(e);
        }}
      ></DropdownMenu>
      <AvatarAndName
        name="John"
        imageUrl="https://picsum.dev/300"
        size="medium"
      ></AvatarAndName>
      <ProductCard
        imageUrl="https://picsum.dev/300"
        name="Random Product"
        price={50}
        actionName="Go To Details"
        onProductAction={() => {
          alert("Moved to product details");
        }}
      ></ProductCard>

      <div
        style={{
          width: "25%",
        }}
      >
        <div className="login_modal">
          <p className="login_modal_content">handling login....</p>
        </div>
        <LoginForm
          onSubmit={() => {
            /*   let modal: HTMLElement =
              document.getElementsByClassName("login_modal")[0];

            modal.style.display = "block";

            setTimeout(() => {
              modal.style.display = "none";
            }, 2000); */
          }}
        ></LoginForm>
      </div>
      {/* Formfield */}
      <div
        style={{
          width: "25%",
        }}
      >
        <p>{InputTextContent}</p>
        <FormField
          label="User"
          name="User"
          type="text"
          required
          value={InputTextContent}
          onChange={(e) => {
            setInputTextContent(e.currentTarget.value);
          }}
        ></FormField>
      </div>

      <CheckboxGroup
        selected={selectedCheckboxes}
        onChange={(cb) => {
          setSelectedCheckboxes(cb);
          console.log(cb);
        }}
        options={[
          { label: "php", value: "php" },
          { label: "node", value: "node" },
          { label: "rust", value: "rust" },
        ]}
        label="BE Languages"
      ></CheckboxGroup>
      <ModalTrigger
        triggerLabel="Show Details"
        modalTitle="Details"
        modalWidth="50%"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse quae
          porro, vel quod alias perspiciatis cupiditate facilis vitae doloremque
          iste ipsum reprehenderit commodi voluptates possimus nam repellendus
          quaerat nisi.
        </p>
      </ModalTrigger>
    </>
  );
}

export default App;
