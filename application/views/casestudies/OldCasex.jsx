import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import caseStudies from '../../styles/case_studies';
import constants from '../../styles/constants';
import { gray } from '../../consts/Colors'
import axios from 'axios';
import { Video } from 'expo-av';

export default function ({ route, navigation }) {
    const [webInfo, setWebInfo] = React.useState(null);
    const [cleanWebInfo, setCleanWebInfo] = React.useState("none");
    const [info, setInfo] = React.useState(null);
    const [videos, setVideos] = React.useState(false);
    const [started, setStarted] = React.useState(false);

    const { number, title } = route.params;

    let url = titleToUrl(title);

    axios.get('https://cardiologyapps.com/guidewireaid/guidewireaid-cases/case-' + number + '-' + url)
        .then(res => {
            setWebInfo(res.data);
        })

    function titleToUrl(title) {
        let url = title;
        return url.toLowerCase().replace(/ /g, "-");
    }

    function cleanData(data) {
        let newData = deleteRange(data, 0, firstPositionOf('et_pb_text_inner', data));
        return newData;
    }

    function deleteRange(data, start, end) {
        let newData = data.substring(0, start);
        newData += data.substring(end, data.length);
        return newData;
    }

    function firstPositionOf(label, data) {
        return startedFirstPositionOf(label, data, 0);
    }

    function startedFirstPositionOf(label, data, start) {
        let text = "";
        let count = 0;
        for (let i = start; i < data.length; i++) {
            if (data[i] == label[count]) {
                text += data[i];
                count++;
            } else {
                text = "";
                count = 0;
            }

            if (text == label) {
                return i - label.length + 1;
            }
        }
        return 0;
    }

    function lastPositionOf(label, data) {
        return startedLastPositionOf(label, data, 0);
    }

    function startedLastPositionOf(label, data, start) {
        let text = "";
        let count = 0;
        for (let i = start; i < data.length; i++) {
            if (data[i] == label[count]) {
                text += data[i];
                count++;
            } else {
                text = "";
                count = 0;
            }

            if (text == label) {
                return i + 1;
            }
        }
        return 0;
    }

    function getInfo() {
        let index = 0, nextIndex = 0, end = 0;
        let text = [];

        end = startedLastPositionOf('et_pb_video', cleanWebInfo, index);

        while (nextIndex < end) {
            nextIndex = startedFirstPositionOf('</li>', cleanWebInfo, index);

            if (nextIndex < end) {
                text.push(cleanWebInfo.substring(startedLastPositionOf('<li>', cleanWebInfo, index), nextIndex));

                index = nextIndex + 2;
            }
        }

        return text;
    }

    function getVideos() {
        let index, nextIndex = 0, end = 0;
        let videos = [];

        index = startedLastPositionOf('et_pb_video_box', cleanWebInfo, 0);
        end = cleanWebInfo.length;

        while (nextIndex < end) {
            nextIndex = startedLastPositionOf('et_pb_video_box', cleanWebInfo, index);

            videos.push(cleanWebInfo.substring(startedLastPositionOf('src="', cleanWebInfo, index), startedLastPositionOf('.mp4', cleanWebInfo, index)));

            if (nextIndex == 0) {
                nextIndex = cleanWebInfo.length;
            }
            index = nextIndex + 2;
        }

        return videos;
    }

    function Item(props) {
        let labels = [];

        let count = 0;
        for (let label of props.text) {
            labels.push(
                <View style={constants.row}>
                    <Text style={[caseStudies.point, { margin: 0, marginTop: 7, marginRight: 5, padding: 0 }]} />
                    <Text key={count} style={caseStudies.labelCase}>{label + "\n"}</Text>
                </View>
            )
            count++;
        }

        return (
            <View style={[caseStudies.itemView, { marginLeft: 5, height: 'auto' }]}>
                <TouchableOpacity onPress={() => navigation.navigate(props.path)}>
                    <View style={constants.row} >
                        <Text style={caseStudies.textCase}>{labels}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    if (webInfo == null) {
        return (
            <View style={caseStudies.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={gray} translucent={false} />
            </View>
        )
    } else {
        if (cleanWebInfo == 'none') {
            setCleanWebInfo(cleanData(webInfo));
        }

        if (!started && cleanWebInfo != 'none') {
            setInfo(getInfo());
            setVideos(getVideos());
            setStarted(true);
        }

        return (
            <View style={caseStudies.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={gray} translucent={false} />

                <Text style={caseStudies.title}>Case {number}: {title}</Text>

                <ScrollView style={caseStudies.scroll}>
                    <Item text={info} />

                    <Video source={{ uri: videos[0] }}
                           style={{ width: 333, height: 216, margin: 0, marginLeft: 5, marginBottom: 20, borderRadius: 20 }}
                           controls={true}
                           rate={1.0}
                           
                           
                           resizeMode="cover"
                           shouldPlay
                           isLooping
                       onFullscreenUpdate={onFullscreenUpdate}
                    />

                    <Item text={info} />
                </ScrollView>
            </View>
        )
    }
}
