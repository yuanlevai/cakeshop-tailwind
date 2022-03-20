import { DownOutlined } from "@ant-design/icons/lib/icons";

function MainMenu(props) {
    return (
        <li>
            <a href="/#" className="inline-flex items-center">
              {props.title}
              {props.icon && <DownOutlined className="text-xs ml-0.5 text-lime-700"/>}
            </a>
        </li>
    )
}

export default MainMenu;