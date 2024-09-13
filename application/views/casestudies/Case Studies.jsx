import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu, { handleResponse } from '../../components/hooks/Menu';
import caseStudies from '../../styles/case_studies';
import constants from '../../styles/constants';
import {darkPurple} from '../../consts/Colors'
import {casesListing} from "./CasesListing";
import library from "../../styles/library";
import {MaterialIcons} from "@expo/vector-icons";

export default class CaseStudies extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        let {route} = this.props;
        let {params} = route;
        console.log(params);
        if(params == null) {
            this.setState({
                data: casesListing,
            });
        } else {
            this.setState({
                data: casesListing.filter(value => params.includes(value.case))
            });
        }
        console.log(this.state.data);
    }

    // componentWillUnmount() {
    //     // print("on unmount:::");
    //     this.setState({
    //         data: casesListing,
    //     });
    // }

    renderCard(title, img, tags, _key) {
        let labels = [];

        let count = 1;
        let count4;
        let tagsArray = tags.split(",");
        for (let label of tagsArray) {
            count4 = count % 4;
            labels.push(
                <View key={count} style={[caseStudies.labels, count4 === 1 ? caseStudies.label1 : count4 === 2 ?
                    caseStudies.label2 : count4 === 3 ?
                        caseStudies.label3 : caseStudies.label4]}>
                    <Text
                          style={count4 === 1 ? caseStudies.label1 : count4 === 2 ?
                              caseStudies.label2 : count4 === 3 ?
                                  caseStudies.label3 : caseStudies.label4}>{label}</Text>
                </View>
            )
            count++;
        }
        let {navigation} = this.props;
        return (
            <View style={caseStudies.cardView} key={_key}>
                <TouchableOpacity onPress={() => navigation.navigate('case', title)}>
                    <View style={[constants.row, {marginBottom: 5}]}>
                        <Image style={caseStudies.image} source={img}/>
                        <View style={{paddingHorizontal: 10, flex: 1}}>
                            <Text style={[library.h1, {fontSize: 14}]}>
                                {title}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    horizontal={true}
                    style={[constants.row, {margin: 0, padding: 0}]}>
                    {labels}
                </ScrollView>
            </View>
        )
    }

    resetState(){
        let {route} = this.props;
        let {params} = route;
        if(params != null) {
            this.setState({
                data: casesListing
            });
        }
    }

    render() {
        let {navigation, route} = this.props;
        let {params} = route;
        let {data} = this.state;

        // console.log(navigation);
        return (
            <View style={caseStudies.container}>
                {/*<StatusBar barStyle="dark-content" hidden={false} backgroundColor={gray} translucent={false}/>*/}
                <StatusBar style="auto"/>
                <View style={{
                    flexDirection: "row",
                    marginTop: 50,
                    marginBottom: 20,
                    marginHorizontal: params ? 0 : 20,
                    alignItems: "center",
                    alignSelf: "flex-start"
                    // justifyContent: "flex-start",
                    // flex: 1
                }}>
                    {
                        params &&
                        // <TouchableOpacity onPress={() => navigation.goBack()} style={caseStudies.iconPadding}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={constants.radius}>
                            <MaterialIcons name="arrow-back-ios" size={18} color={darkPurple}/>
                        </TouchableOpacity>
                    }
                    <Text style={[library.title, {fontSize: 18}]}>Case Reviews</Text>
                </View>

                <ScrollView style={caseStudies.scroll}>
                    {/*{cases}*/}
                    {
                        data.length > 0 &&
                        data.map((c, i) => this.renderCard(c.title, c.image, c.tags, i))
                    }
                    <Text style={caseStudies.end}/>
                </ScrollView>

                <Menu onResponse={handleResponse(navigation, 3)} action={this.resetState.bind(this)}/>
            </View>
        )
    }
}
