import React from 'react'
import {Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import library from '../../styles/library';
import Menu, { handleResponse } from '../../components/hooks/Menu';
import constants from "../../styles/constants";
import {AntDesign, FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {darkPurple, white} from "../../consts/Colors";
import basics from "../../styles/basics";
import {basics_listing} from "./basics_listing";
import {libraryData} from "../library/LibraryData";
import Highlighter from "react-native-highlight-words";

export default class Basics extends React.Component {
    state = {
        data: [],
        isSearch: false,
        showCount: false,
        searchValue: ""
    };

    componentDidMount() {
        this.setState({data: basics_listing});
    }

    searchCard(basic) {
        let {searchValue} = this.state;
        let str = basic.description.toLowerCase();
        let stringIndex;
        let reg = new RegExp(searchValue.toLowerCase(), "g");
        let occurrence = (basic.description.toLowerCase().match(reg) || []).length;
        let search = [];
        let starts;
        let ends;
        for(let i = 0; i < occurrence; i++){
            stringIndex = str.indexOf(searchValue.toLowerCase());
            starts = stringIndex - 30;
            ends = stringIndex + 70;
            console.log(starts);
            console.log(ends);
            search.push(str.toLowerCase().slice(starts, ends));
            str = str.slice((stringIndex + searchValue.length));
        }

        return (
            <View style={basics.searchCard}>
                <Text style={[library.h2]}>{basic.title}</Text>
                {
                    search.map((value, index) =>
                        <Highlighter
                            key={index}
                            highlightStyle={{backgroundColor: 'yellow'}}
                            searchWords={[searchValue]}
                            textToHighlight={`...${value}...`}
                        />
                        // <Text key={index} style={[library.p, {fontSize: 14}]}>...{value}...</Text>
                    )
                }
                {/*<Text style={[library.p, {fontSize: 14}]}>...{basic.description.slice(starts, ends)}...</Text>*/}
            </View>
        );
    }


    async handleSearch(e){
        console.log("Handle Search:::::");
        let {isSearch, showCount, searchValue} = this.state;
        let data = [];
        if(searchValue){
            basics_listing.forEach(basic => {
                if(!basic.isTable && basic.description.toLowerCase().includes(searchValue.toLowerCase())){
                    data.push(basic);
                }
            });
            this.setState({
                data,
                isSearch: true
            });
        }
    }

    render() {
        let {navigation} = this.props;
        let {data, isSearch, showCount, searchValue} = this.state;
        return (
            <View style={library.container}>
                <StatusBar style="auto"/>
                <View style={[constants.row, {marginLeft: 20, marginTop: 50, alignItems: "center"}]}>
                    {/*<TouchableOpacity onPress={event => navigation.goBack()}>*/}
                    {/*    <MaterialIcons name="arrow-back-ios" size={26} color={darkPurple} />*/}
                    {/*</TouchableOpacity>*/}
                    <Text style={library.title}>Basics</Text>
                </View>

                {/*SEARCH FIELD*/}
                <View style={[library.input, {backgroundColor: white}]}>
                    <TextInput
                        style={[library.inputText, {color: darkPurple}]}
                        placeholder={'Search Basics'}
                        value={searchValue}
                        // onFocus={e => this.setState({isSearch: true})}
                        onChangeText={text => this.setState({searchValue: text.trim()})}
                        // onSubmitEditing={this.handleSearch.bind(this)}
                    />
                    {
                        !isSearch ?
                            <TouchableOpacity onPress={this.handleSearch.bind(this)} style={library.searchButton}>
                                <FontAwesome name="search" size={24} color={white}/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={(event) => {
                                this.setState({
                                    isSearch: false,
                                    showCount: false,
                                    data: basics_listing,
                                    searchValue: ""
                                });
                                Keyboard.dismiss();
                            }}>
                                <AntDesign name="closecircleo" size={24} color={darkPurple} />
                            </TouchableOpacity>
                    }
                </View>

                <View style={{flex: 1}}>
                    <ScrollView
                        contentContainerStyle={{flexGrow: 1, paddingBottom: "30%"}}
                        showsVerticalScrollIndicator={false}>
                        {data.map((basic, index) =>
                            <TouchableOpacity key={index} onPress={(e) => {
                                navigation.navigate('basicsdetail', basic.name)
                            }}>
                                {
                                    !isSearch ?
                                    <View style={[basics.card, {marginTop: 20}]}>
                                        <Text style={library.text}>{basic.title}</Text>
                                        <MaterialIcons name="arrow-forward-ios" size={26} color={darkPurple}/>
                                    </View>
                                        : this.searchCard(basic)
                                }
                            </TouchableOpacity>
                        )}

                    </ScrollView>
                </View>

                <Menu onResponse={handleResponse(navigation, 2)}/>
            </View>
        )
    }
}
