import { body } from "./body"
import { centerBody, linsten, titleForTopics, topics } from "./listen"
import { root } from "./root"
import { top } from "./top"

const Header = {
    topics: {
        root: topics,
        body: centerBody,
        title: titleForTopics,

    },
    linsten,
    body,
    top,
    root
}

export default Header