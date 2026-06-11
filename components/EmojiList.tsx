import { useState } from "react";
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable} from "react-native";
import { Image } from "react-native";

type Props = {
    onSelect: (Image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props){
    const [emoji] = useState<ImageSourcePropType[]>([
        require("../assets/images/educacao-online.png"),
        require("../assets/images/desenvolvimento.png"),
        require("../assets/images/teste.png"),
        require("../assets/images/educacao-a-distancia.png"),
        require("../assets/images/curso-online.png"),
        require("../assets/images/10-principais.png"),
        require("../assets/images/apresentacao.png"),
        require("../assets/images/classe.png"),
    ])
}