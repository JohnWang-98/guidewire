import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import library from '../../styles/library';
import Menu, { handleResponse } from '../../components/hooks/Menu';
import { blue, darkPurple, gray, white } from '../../consts/Colors';
import {
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from '@expo/vector-icons';
import constants from '../../styles/constants';
import { getHeight, getWidth } from '../../utils/cssfragments';
import { FlatList } from 'react-native-gesture-handler';
import { catheterItems, libraryData } from './LibraryData';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fuse from 'fuse.js';
import { synonyms } from './synonyms';
import ApiKeys from '../../consts/ApiKey';

const API_URL = ApiKeys.API_URL || 'http://localhost:5000';

export default class Library extends React.Component {
  state = {
    isSearching: false,
    isFiltering: false,
    editable: false,
    showFilter: false,
    isLoadingMoreGuidewires: false, // For guidewires tab
    isLoadingMoreCatheters: false,
    pageGuidewires: 1, // Current page number for guidewires
    pageCatheters: 1, // Current page number for catheter items
    perPage: 10, // Items per page
    data: [], // Guidewires data
    noResultsFound: false,
    catheterData: [],
    guidewiresData: [], // Catheter items data
    catheter: false, // Items per page
    guidewiretotalcount: 0,
    catheritemtotalcount: 0,
    hasMoreGuidewires: true,
    hasMoreCatheters: true,
    pageGuidewiresSearch: 1, // Current page number for guidewires
    pageCathetersSearch: 1,
    catheterDataSearch: [],
    guidewiresDataSearch: [],
    hasMoreGuidewiresSearch: true,
    hasMoreCathetersSearch: true,
    isLoadingMoreGuidewiresSearch: false, // For guidewires tab
    isLoadingMoreCathetersSearch: false,
    pageGuidewiresFilter: 1, // Current page number for guidewires
    pageCathetersFilter: 1,
    catheterDataFilter: [],
    guidewiresDataFilter: [],
    hasMoreGuidewiresFilter: true,
    hasMoreCathetersFilter: true,
    isLoadingMoreGuidewiresFilter: false, // For guidewires tab
    isLoadingMoreCathetersFilter: false,
    coreMaterials: ['Hybrid', 'Nitinol', 'Stainless steel'],
    manufacturers: [
      'Abbott',
      'AMG International',
      'Asahi Intecc',
      'Biotronik',
      'Boston Scientific',
      'Cardiovascular Systems Inc.',
      'COMED',
      'Concert Medical',
      'Medtronic',
      'Teleflex',
      'Terumo Interventional Systems',
    ],
    tipCoating: ['Hybrid', 'Hydrophilic', 'Hydrophobic', 'None'],
    selectedManufactures: [],
    selectedCoreMaterials: [],
    availableWireLengths: [
      '150cm',
      '160cm',
      '180cm',
      '180cm [0.018” only]',
      '182cm',
      '185cm',
      '190cm',
      '195cm',
      '200cm',
      '300cm',
      '330cm',
      '335cm',
      '350cm',
    ],
    selectedWireLength: [],
    selectedTipCoating: '',
    coreTapping: '',
    polymerCover: '',
    filterApplied: null,
    fromValue: 0,
    toValue: 0,
    value: 0,
    rangeValues: [0, 40],
    searchValue: '',
    isSearch: false,
    searches: [],
    showLibraryCount: false,
    showCatheterCount: false,

    catheterData: [],
    catheter: false,
    catheterManufacturers: [
      'Acrostak',
      'Asahi Intecc',
      'Boston Scientific',
      'Cardiovascular Systems Inc.',
      'IMDS (Interventional Medical Device Solutions)',
      'Kaneka Medical Products',
      'Merit',
      'Teleflex',
      'Terumo Interventional Systems',
    ],
    selectedCatheterManufactures: [],
    crossProfile: [
      '1.7F',
      '1.8F',
      '1.9F',
      '2F',
      '2.1F',
      '2.1F with 5 coil taper zones',
      '2.2F',
      '2.25F',
      '2.4F',
      '2.4F with 3 coil taper zones',
      '2.6F',
      '2.9F',
      '2.9F with 2cm outer nylon coil',
      'Long taper tip 15cm',
      'Not Applicable',
    ],
    selectedCrossProfile: [],
    availableLengths: [
      '125cm',
      '130/150cm',
      '135cm',
      '135/150cm',
      '140cm',
      '140/145cm',
      '145cm',
      '145cm',
    ],
    selectedLength: [],
    angulatedTip: '',
    dualLumen: '',
    diameters: [0, 2.5],
    catheterFilterApplied: null,
  };

  async componentDidMount() {
    this.fetchData();
  }

  // Fetch guidewire or catheter data based on the 'catheter' state
  // Fetch guidewire or catheter data based on the 'catheter' state
  fetchData = async (isLoadMore = false) => {
    const {
      catheter,
      pageGuidewires,
      pageCatheters,
      guidewiresData,
      catheterData,
      guidewiretotalcount,
      catheritemtotalcount,
      perPage,
    } = this.state;

    let endpoint = '';
    let page = catheter ? pageCatheters : pageGuidewires;
    let start = (page - 1) * perPage;
    let end = (page - 1) * perPage + perPage;
    if (catheter) {
      endpoint = `${API_URL}/catheritems?range=[${start},${end}]`;
    } else {
      endpoint = `${API_URL}/guidewires?range=[${start},${end}]`;
    }
    try {
      const response = await fetch(endpoint);
      const newData = await response.json();
      const totalcount = response.headers.get('X-Total-Count');

      if (newData.length > 0) {
        if (catheter) {
          this.setState({
            catheritemtotalcount: totalcount,
            catheterData: isLoadMore ? catheterData.concat(newData) : newData,
            pageCatheters: pageCatheters + 1,
            isLoadingMoreCatheters: false,
            hasMoreCatheters: newData.length === 10, // Check if more data exists
          });
        } else {
          this.setState({
            guidewiretotalcount: totalcount,
            guidewiresData: isLoadMore
              ? guidewiresData.concat(newData)
              : newData,
            pageGuidewires: pageGuidewires + 1,
            isLoadingMoreGuidewires: false,
            hasMoreGuidewires: newData.length === 10, // Check if more data exists
          });
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchDataSearch = async (isLoadMore = false) => {
    const {
      catheter,
      pageGuidewiresSearch,
      pageCathetersSearch,
      guidewiresDataSearch,
      catheterDataSearch,
      guidewiretotalcount,
      catheritemtotalcount,
      searchValue,
      perPage,
    } = this.state;

    let endpoint = '';
    let page = catheter ? pageCathetersSearch : pageGuidewiresSearch;
    let start = (page - 1) * perPage;
    let end = (page - 1) * perPage + perPage;
    if (catheter) {
      endpoint = `${API_URL}/catheritems?filter={"q":"${searchValue}"}&range=[${start},${end}]`;
    } else {
      endpoint = `${API_URL}/guidewires?filter={"q":"${searchValue}"}&range=[${start},${end}]`;
    }
    try {
      const response = await fetch(endpoint);
      const newData = await response.json();
      const totalcount = response.headers.get('X-Total-Count');
      if (totalcount === '0') {
        this.setState({
          guidewiresDataFilter: [],
          catheterDataFilter: [],
          guidewiretotalcount: 0,
          catheritemtotalcount: 0,
          isLoadingMoreGuidewiresFilter: false,
          isLoadingMoreCathetersFilter: false,
          hasMoreGuidewiresFilter: false,
          hasMoreCathetersFilter: false,
          noResultsFound: true, // You can use this flag to show a 'No Results' message
        });
        return;
      }
      if (newData.length > 0) {
        if (catheter) {
          this.setState({
            catheritemtotalcount: totalcount,
            catheterDataSearch: isLoadMore
              ? catheterDataSearch.concat(newData)
              : newData,
            pageCathetersSearch: pageCathetersSearch + 1,
            isLoadingMoreCathetersSearch: false,
            hasMoreCathetersSearch: newData.length === 10, // Check if more data exists
          });
        } else {
          this.setState({
            guidewiretotalcount: totalcount,
            guidewiresDataSearch: isLoadMore
              ? guidewiresDataSearch.concat(newData)
              : newData,
            pageGuidewiresSearch: pageGuidewiresSearch + 1,
            isLoadingMoreGuidewiresSearch: false,
            hasMoreGuidewiresSearch: newData.length === 10, // Check if more data exists
          });
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchDataFilter = async (isLoadMore = false) => {
    const {
      catheter,
      pageGuidewiresFilter,
      pageCathetersFilter,
      guidewiresDataFilter,
      catheterDataFilter,
      perPage,
      selectedManufactures,
      selectedCoreMaterials,
      selectedWireLength,
      selectedTipCoating,
      coreTapping,
      polymerCover,
      rangeValues,
      selectedCatheterManufactures,
      selectedCrossProfile,
      selectedLength,
      angulatedTip,
      dualLumen,
      diameters,
    } = this.state;

    let page = catheter ? pageCathetersFilter : pageGuidewiresFilter;
    let start = (page - 1) * perPage;
    let end = (page - 1) * perPage + perPage;

    // Initialize the base endpoint URL depending on whether catheter or guidewires are selected
    let endpoint = catheter
      ? `${API_URL}/catheritems`
      : `${API_URL}/guidewires`;

    // Initialize filter object
    let filters = {};

    // Add filters based on the selected values
    if (!catheter) {
      if (selectedManufactures.length > 0) {
        filters.manufacturer = selectedManufactures;
      }
      if (selectedCoreMaterials.length > 0) {
        filters.filter_core_material = selectedCoreMaterials;
      }
      if (selectedWireLength.length > 0) {
        filters.available_lengths = selectedWireLength;
      }
      if (selectedTipCoating) {
        filters.filter_tip_coating = selectedTipCoating;
      }
      if (coreTapping) {
        filters.core_tapering = coreTapping;
      }
      if (polymerCover) {
        filters.filter_polymer_cover = polymerCover;
      }
      if (rangeValues.length === 2) {
        filters.filter_tip_load = rangeValues;
      }
    } else {
      // For Catheters filter
      if (selectedCatheterManufactures.length > 0) {
        filters.manufacturer = selectedCatheterManufactures;
      }
      if (selectedCrossProfile.length > 0) {
        filters.crossing_profile = selectedCrossProfile;
      }
      if (selectedLength.length > 0) {
        filters.available_lengths = selectedLength;
      }
      if (angulatedTip) {
        filters.filter_only_angulated_tip = angulatedTip;
      }
      if (dualLumen) {
        filters.filter_only_dual_lumen = dualLumen;
      }
      if (diameters.length === 2) {
        filters.filter_numeric_tip_od = diameters;
      }
    }

    // Convert filters object to a query string
    const filterString = encodeURIComponent(JSON.stringify(filters));

    // Append range and filter parameters to the endpoint URL
    endpoint += `?filter=${filterString}&range=[${start},${end}]`;

    try {
      const response = await fetch(endpoint);
      const newData = await response.json();
      const totalcount = response.headers.get('X-Total-Count');

      if (totalcount === '0') {
        this.setState({
          guidewiresDataFilter: [],
          catheterDataFilter: [],
          guidewiretotalcount: 0,
          catheritemtotalcount: 0,
          isLoadingMoreGuidewiresFilter: false,
          isLoadingMoreCathetersFilter: false,
          hasMoreGuidewiresFilter: false,
          hasMoreCathetersFilter: false,
          noResultsFound: true, // You can use this flag to show a 'No Results' message
        });
        return;
      }
      if (newData.length > 0) {
        if (catheter) {
          this.setState({
            catheritemtotalcount: totalcount,
            catheterDataFilter: isLoadMore
              ? catheterDataFilter.concat(newData)
              : newData,
            pageCathetersFilter: pageCathetersFilter + 1,
            isLoadingMoreCathetersFilter: false,
            hasMoreCathetersFilter: newData.length === perPage, // Check if more data exists
          });
        } else {
          this.setState({
            guidewiretotalcount: totalcount,
            guidewiresDataFilter: isLoadMore
              ? guidewiresDataFilter.concat(newData)
              : newData,
            pageGuidewiresFilter: pageGuidewiresFilter + 1,
            isLoadingMoreGuidewiresFilter: false,
            hasMoreGuidewiresFilter: newData.length === perPage, // Check if more data exists
          });
        }
      }
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  // Load more data when the user reaches the end of the list
  loadMoreGuidewires = () => {
    const { hasMoreGuidewires, isLoadingMoreGuidewires } = this.state;
    if (!hasMoreGuidewires || isLoadingMoreGuidewires) return; // Prevent further loading if no more data or already loading

    this.setState({ isLoadingMoreGuidewires: true }, () => {
      this.fetchData(true); // Pass true to indicate we're loading more data
    });
  };

  loadMoreCatheters = () => {
    const { hasMoreCatheters, isLoadingMoreCatheters } = this.state;
    if (!hasMoreCatheters || isLoadingMoreCatheters) return; // Prevent further loading if no more data or already loading

    this.setState({ isLoadingMoreCatheters: true }, () => {
      this.fetchData(true); // Pass true to indicate we're loading more data
    });
  };

  loadMoreGuidewiresSearch = () => {
    const { hasMoreGuidewiresSearch, isLoadingMoreGuidewiresSearch } =
      this.state;
    if (!hasMoreGuidewiresSearch || isLoadingMoreGuidewiresSearch) return; // Prevent further loading if no more data or already loading

    this.setState({ isLoadingMoreGuidewiresSearch: true }, () => {
      this.fetchDataSearch(true); // Pass true to indicate we're loading more data
    });
  };

  loadMoreCathetersSearch = () => {
    const { hasMoreCathetersSearch, isLoadingMoreCathetersSearch } = this.state;
    if (!hasMoreCathetersSearch || isLoadingMoreCathetersSearch) return; // Prevent further loading if no more data or already loading

    this.setState({ isLoadingMoreCathetersSearch: true }, () => {
      this.fetchDataSearch(true); // Pass true to indicate we're loading more data
    });
  };

  loadMoreGuidewiresFilter = () => {
    const { hasMoreGuidewiresFilter, isLoadingMoreGuidewiresFilter } =
      this.state;
    if (!hasMoreGuidewiresFilter || isLoadingMoreGuidewiresFilter) return; // Prevent further loading if no more data or already loading

    this.setState({ isLoadingMoreGuidewiresFilter: true }, () => {
      this.fetchDataFilter(true); // Pass true to indicate we're loading more data
    });
  };

  loadMoreCathetersFilter = () => {
    const { hasMoreCathetersFilter, isLoadingMoreCathetersFilter } = this.state;
    if (!hasMoreCathetersFilter || isLoadingMoreCathetersFilter) return; // Prevent further loading if no more data or already loading

    this.setState({ isLoadingMoreCathetersFilter: true }, () => {
      this.fetchDataFilter(true); // Pass true to indicate we're loading more data
    });
  };

  renderCard(item) {
    let { catheter } = this.state;
    let labels = [];
    let count = 1;
    let count4;
    for (let i = 0; i < 4; i++) {
      count4 = count % 4;
      labels.push(
        <View
          key={count}
          style={[
            library.labels,
            count4 === 1
              ? library.label1
              : count4 === 2
              ? library.label2
              : count4 === 3
              ? library.label3
              : library.label4,
          ]}
        >
          <Text
            style={
              count4 === 1
                ? library.label1
                : count4 === 2
                ? library.label2
                : count4 === 3
                ? library.label3
                : library.label4
            }
          >
            {count4 === 1
              ? item.manufacturer
              : count4 === 2
              ? catheter
                ? item.tip_od
                : item.filter_core_material
              : count4 === 3
              ? catheter
                ? item.coating
                : item.tip_design
              : catheter
              ? item.available_lengths
              : item.tip_coating}
          </Text>
        </View>
      );
      count++;
    }
    let { navigation } = this.props;

    return (
      <View style={{ marginBottom: 10 }}>
        <View style={library.card}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('librarydetail', item);
            }}
          >
            <Text style={library.text}>{item.model}</Text>
            {/*{item.score && <Text style={library.text}>{"Score :" + item.score}</Text>}*/}
            <Image
              source={{
                uri:
                  item.image_url && typeof item.image_url === 'string'
                    ? item.image_url
                    : 'https://via.placeholder.com/150',
              }}
              resizeMode={'contain'}
              style={{
                width: getWidth(85),
                height: getHeight(10),
                alignSelf: 'center',
              }}
            />
            {/* <Text style={library.text}>{item}</Text> */}
          </TouchableOpacity>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            horizontal={true}
            style={[constants.row, { paddingHorizontal: 15 }]}
          >
            {labels}
          </ScrollView>
        </View>
      </View>
    );
  }

  multiSliderValuesChange = (values) => {
    this.setState({
      rangeValues: values,
    });
  };

  diameterValuesChange = (values) => {
    this.setState({
      diameters: values,
    });
  };

  CustomSliderMarkerLeft() {
    return <View style={library.thumb} />;
  }

  renderFilter() {
    let {
      showFilter,
      manufacturers,
      coreMaterials,
      availableWireLengths,
      selectedWireLength,
      selectedManufactures,
      selectedCoreMaterials,
      coreTapping,
      polymerCover,
      tipCoating,
      selectedTipCoating,
      filterApplied,
      rangeValues,
      searchValue,
    } = this.state;
    return (
      <View
        style={{
          backgroundColor: white,
          flex: 1,
          marginTop: 40,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <ScrollView
          style={{ marginBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              constants.row,
              {
                justifyContent: 'space-between',
                marginHorizontal: 15,
                marginTop: 10,
                alignItems: 'center',
              },
            ]}
          >
            <View style={{ flex: 1, marginBottom: 10 }}>
              <Text
                style={[library.title, { textAlign: 'center', fontSize: 18 }]}
              >
                Filter By
              </Text>
            </View>
            <TouchableOpacity
              onPress={(event) => {
                if (filterApplied != null) {
                  this.setState({
                    selectedCoreMaterials: filterApplied.coreMaterials,
                    selectedTipCoating: filterApplied.tipCoating,
                    selectedManufactures: filterApplied.manufacturers,
                    polymerCover: filterApplied.polymerCover,
                    coreTapping: filterApplied.coreTapping,
                    showFilter: !showFilter,
                    showLibraryCount: true,
                  });
                } else {
                  this.setState({
                    selectedManufactures: [],
                    selectedCoreMaterials: [],
                    selectedTipCoating: '',
                    coreTapping: '',
                    polymerCover: '',
                    rangeValues: [0, 40],
                    showFilter: false,
                    showLibraryCount: false,
                  });
                }
              }}
            >
              <MaterialIcons name="close" size={25} color={darkPurple} />
            </TouchableOpacity>
          </View>

          {/*CORE MATERIALS*/}
          <Text
            style={[
              library.text,
              { fontSize: 20, color: darkPurple, marginBottom: 8 },
            ]}
          >
            Core Material
          </Text>
          <View style={library.fixToText}>
            {coreMaterials.map((value, index) => (
              <TouchableOpacity
                underlayColor={gray}
                key={index}
                onPress={() => {
                  if (selectedCoreMaterials.includes(value)) {
                    let itemIndex = selectedCoreMaterials.indexOf(value);
                    selectedCoreMaterials.splice(itemIndex, 1);
                    this.setState({ selectedCoreMaterials });
                  } else {
                    selectedCoreMaterials.push(value);
                    this.setState({ selectedCoreMaterials });
                  }
                }}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor:
                      selectedCoreMaterials &&
                      selectedCoreMaterials.includes(value)
                        ? blue
                        : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color:
                        selectedCoreMaterials &&
                        selectedCoreMaterials.includes(value)
                          ? white
                          : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*TAPERING*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Core Tapering
          </Text>
          <View style={library.fixToText}>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ coreTapping: 'Yes' })}
              style={[
                library.buttonStyle,
                { backgroundColor: coreTapping === 'Yes' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: coreTapping === 'Yes' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ coreTapping: 'No' })}
              style={[
                library.buttonStyle,
                { backgroundColor: coreTapping === 'No' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: coreTapping === 'No' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>

          {/*AVAILABLE LENGTH*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Available Lengths
          </Text>
          <View style={library.fixToText}>
            {availableWireLengths.map((value, index) => (
              <TouchableOpacity
                underlayColor={gray}
                key={index}
                onPress={() => {
                  if (selectedWireLength.includes(value)) {
                    let itemIndex = selectedWireLength.indexOf(value);
                    selectedWireLength.splice(itemIndex, 1);
                    this.setState({ selectedWireLength });
                  } else {
                    selectedWireLength.push(value);
                    this.setState({ selectedWireLength });
                  }
                }}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor: selectedWireLength.includes(value)
                      ? blue
                      : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color: selectedWireLength.includes(value) ? white : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*SLIDER*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Tip Load
          </Text>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <MultiSlider
              values={[rangeValues[0], rangeValues[1]]}
              onValuesChange={this.multiSliderValuesChange}
              min={0}
              max={40}
              isMarkersSeparated={true}
              customMarkerLeft={this.CustomSliderMarkerLeft.bind(this)}
              customMarkerRight={this.CustomSliderMarkerLeft.bind(this)}
              sliderLength={getWidth(75)}
              selectedStyle={{ backgroundColor: darkPurple }}
              trackStyle={{ height: 4 }}
            />
            <View
              style={[
                constants.row,
                { flex: 1, width: '100%', justifyContent: 'space-between' },
              ]}
            >
              <Text style={library.text}>{rangeValues[0]}g</Text>
              <Text style={library.text}>{rangeValues[1]}g</Text>
            </View>
          </View>

          {/*TIP COATING*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Tip Coating
          </Text>
          <View style={library.fixToText}>
            {tipCoating.map((value, index) => (
              <TouchableOpacity
                key={index}
                underlayColor={gray}
                onPress={() => this.setState({ selectedTipCoating: value })}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor:
                      selectedTipCoating === value ? blue : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color: selectedTipCoating === value ? white : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*POLYMER COVER*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Polymer Cover
          </Text>
          <View style={library.fixToText}>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ polymerCover: 'Yes' })}
              style={[
                library.buttonStyle,
                { backgroundColor: polymerCover === 'Yes' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: polymerCover === 'Yes' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ polymerCover: 'No' })}
              style={[
                library.buttonStyle,
                { backgroundColor: polymerCover === 'No' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: polymerCover === 'No' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>

          {/*MANUFACTURER*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Manufacturer
          </Text>
          <View style={library.fixToText}>
            {manufacturers.map((value, index) => (
              <TouchableOpacity
                underlayColor={gray}
                key={index}
                onPress={() => {
                  if (selectedManufactures.includes(value)) {
                    let itemIndex = selectedManufactures.indexOf(value);
                    selectedManufactures.splice(itemIndex, 1);
                    this.setState({ selectedManufactures });
                  } else {
                    selectedManufactures.push(value);
                    this.setState({ selectedManufactures });
                  }
                }}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor: selectedManufactures.includes(value)
                      ? blue
                      : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color: selectedManufactures.includes(value)
                        ? white
                        : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/*SUBMITS*/}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'space-between',
            // alignItems: "center",
            bottom: 20,
            left: 5,
            right: 5,
            // marginTop: 15
          }}
        >
          <View style={[library.submits, library.shadowButton]}>
            <TouchableOpacity
              onPress={this.resetLibraryFilter.bind(this)}
              style={{
                // backgroundColor: white,
                flex: 1,
                height: getHeight(8),
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
              underlayColor={blue}
            >
              <Text
                style={[
                  library.text,
                  library.buttonText,
                  { color: darkPurple },
                ]}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              library.submits,
              ,
              library.shadowButton,
              { backgroundColor: darkPurple },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                // if(!catheter){
                this.handleFilter();
                // } else {
                //     this.handleCatheterFilter();
                // }
              }}
              style={{
                // backgroundColor: darkPurple,
                flex: 1,
                height: getHeight(8),
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
              underlayColor={white}
            >
              <Text
                style={[library.text, library.buttonText, { color: white }]}
              >
                Apply Filter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderCatheterFilter() {
    const {
      showFilter,
      crossProfile,
      catheterManufacturers,
      selectedCatheterManufactures,
      selectedCrossProfile,
      availableLengths,
      selectedLength,
      angulatedTip,
      dualLumen,
      diameters,
      catheterFilterApplied,
    } = this.state;

    return (
      <View
        style={{
          backgroundColor: white,
          flex: 1,
          marginTop: 40,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <ScrollView
          style={{ marginBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={[constants.row, library.filterContainer]}>
            <View style={{ flex: 1, marginBottom: 10 }}>
              <Text
                style={[library.title, { textAlign: 'center', fontSize: 18 }]}
              >
                Filter By
              </Text>
            </View>
            <TouchableOpacity
              onPress={(event) => {
                if (catheterFilterApplied != null) {
                  this.setState({
                    selectedCatheterManufactures:
                      catheterFilterApplied.catheterManufacturers,
                    selectedCrossProfile: catheterFilterApplied.crossProfile,
                    selectedLength: catheterFilterApplied.availableLengths,
                    angulatedTip: catheterFilterApplied.angulatedTip,
                    dualLumen: catheterFilterApplied.dualLumen,
                    showFilter: !showFilter,
                    showCatheterCount: true,
                  });
                } else {
                  this.setState({
                    selectedCatheterManufactures: [],
                    selectedCrossProfile: [],
                    selectedLength: [],
                    angulatedTip: '',
                    dualLumen: '',
                    diameters: [0, 2.5],
                    showFilter: false,
                    showCatheterCount: false,
                  });
                }
              }}
            >
              <MaterialIcons name="close" size={25} color={darkPurple} />
            </TouchableOpacity>
          </View>

          {/*CROSS PROFILE*/}
          <Text
            style={[
              library.text,
              { fontSize: 20, color: darkPurple, marginBottom: 8 },
            ]}
          >
            Crossing Profile
          </Text>
          <View style={library.fixToText}>
            {crossProfile.map((value, index) => (
              <TouchableOpacity
                underlayColor={gray}
                key={index}
                onPress={() => {
                  if (selectedCrossProfile.includes(value)) {
                    let itemIndex = selectedCrossProfile.indexOf(value);
                    selectedCrossProfile.splice(itemIndex, 1);
                    this.setState({ selectedCrossProfile });
                  } else {
                    selectedCrossProfile.push(value);
                    this.setState({ selectedCrossProfile });
                  }
                }}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor: selectedCrossProfile.includes(value)
                      ? blue
                      : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color: selectedCrossProfile.includes(value)
                        ? white
                        : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*AGULATED TIP*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Agulated Tip
          </Text>
          <View style={library.fixToText}>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ angulatedTip: 'Yes' })}
              style={[
                library.buttonStyle,
                { backgroundColor: angulatedTip === 'Yes' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: angulatedTip === 'Yes' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ angulatedTip: 'No' })}
              style={[
                library.buttonStyle,
                { backgroundColor: angulatedTip === 'No' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: angulatedTip === 'No' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>

          {/*SLIDER*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Tip Outer Diameter
          </Text>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <MultiSlider
              values={[diameters[0], diameters[1]]}
              onValuesChange={this.diameterValuesChange}
              min={0}
              max={2.5}
              isMarkersSeparated={true}
              customMarkerLeft={this.CustomSliderMarkerLeft.bind(this)}
              customMarkerRight={this.CustomSliderMarkerLeft.bind(this)}
              sliderLength={getWidth(75)}
              selectedStyle={{ backgroundColor: darkPurple }}
              trackStyle={{ height: 4 }}
            />
            <View
              style={[
                constants.row,
                { flex: 1, width: '100%', justifyContent: 'space-between' },
              ]}
            >
              <Text style={library.text}>{diameters[0]}F</Text>
              <Text style={library.text}>{diameters[1]}F</Text>
            </View>
          </View>

          {/*Available Lengths*/}
          <Text
            style={[
              library.text,
              { fontSize: 20, color: darkPurple, marginBottom: 8 },
            ]}
          >
            Available Lengths
          </Text>
          <View style={library.fixToText}>
            {availableLengths.map((value, index) => (
              <TouchableOpacity
                underlayColor={gray}
                key={index}
                onPress={() => {
                  if (selectedLength.includes(value)) {
                    let itemIndex = selectedLength.indexOf(value);
                    selectedLength.splice(itemIndex, 1);
                    this.setState({ selectedLength });
                  } else {
                    selectedLength.push(value);
                    this.setState({ selectedLength });
                  }
                }}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor: selectedLength.includes(value)
                      ? blue
                      : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color: selectedLength.includes(value) ? white : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*DUEL LUMEN*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Dual Lumen
          </Text>
          <View style={library.fixToText}>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ dualLumen: 'Yes' })}
              style={[
                library.buttonStyle,
                { backgroundColor: dualLumen === 'Yes' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: dualLumen === 'Yes' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor={gray}
              onPress={() => this.setState({ dualLumen: 'No' })}
              style={[
                library.buttonStyle,
                { backgroundColor: dualLumen === 'No' ? blue : white },
              ]}
            >
              <Text
                style={[
                  library.text,
                  {
                    color: dualLumen === 'No' ? white : blue,
                    fontSize: 14,
                  },
                ]}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>

          {/*MANUFACTURER*/}
          <Text
            style={[
              library.text,
              {
                fontSize: 20,
                color: darkPurple,
                marginBottom: 8,
                marginTop: 15,
              },
            ]}
          >
            Manufacturer
          </Text>
          <View style={library.fixToText}>
            {catheterManufacturers.map((value, index) => (
              <TouchableOpacity
                underlayColor={gray}
                key={index}
                onPress={() => {
                  if (selectedCatheterManufactures.includes(value)) {
                    let itemIndex = selectedCatheterManufactures.indexOf(value);
                    selectedCatheterManufactures.splice(itemIndex, 1);
                    this.setState({ selectedCatheterManufactures });
                  } else {
                    selectedCatheterManufactures.push(value);
                    this.setState({ selectedCatheterManufactures });
                  }
                }}
                style={[
                  library.buttonStyle,
                  {
                    backgroundColor: selectedCatheterManufactures.includes(
                      value
                    )
                      ? blue
                      : white,
                  },
                ]}
              >
                <Text
                  style={[
                    library.text,
                    {
                      color: selectedCatheterManufactures.includes(value)
                        ? white
                        : blue,
                      fontSize: 14,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/*SUBMITS*/}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'space-between',
            bottom: 20,
            left: 5,
            right: 5,
          }}
        >
          <View style={[library.submits, library.shadowButton]}>
            <TouchableOpacity
              onPress={this.resetCatherFilter.bind(this)}
              style={{
                // backgroundColor: white,
                flex: 1,
                height: getHeight(8),
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
              underlayColor={blue}
            >
              <Text
                style={[
                  library.text,
                  library.buttonText,
                  { color: darkPurple },
                ]}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              library.submits,
              library.shadowButton,
              { backgroundColor: darkPurple },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                // if(!catheter){
                //     this.handleFilter();
                // } else {
                this.handleFilter();
                // }
              }}
              style={{
                // backgroundColor: darkPurple,
                flex: 1,
                height: getHeight(8),
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
              underlayColor={white}
            >
              <Text
                style={[library.text, library.buttonText, { color: white }]}
              >
                Apply Filter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  handleCatheterFilter() {
    // this.setState({
    //   isFiltering: true,
    //   showFilter: false,
    // });
    // this.fetchDataFilter();
    let {
      selectedCatheterManufactures,
      selectedCrossProfile,
      selectedLength,
      angulatedTip,
      dualLumen,
      diameters,
      cathData,
      searchValue,
    } = this.state;

    // let result = catheterItems;
    let filterData = cathData.length > 0 ? cathData : this.state.catheterData;
    let result = cathData.length > 0 ? cathData : this.state.catheterData;
    let lengthResult = [];
    let filteredResult = [];

    if (selectedCrossProfile.length > 0) {
      result = [];
      filterData.forEach((item) => {
        if (selectedCrossProfile.includes(item.crossing_profile)) {
          result.push(item);
        }
      });
      this.setState({ catheterData: result });
    }
    if (angulatedTip !== '') {
      // if(coreTapping !== ""){
      result = result.filter(
        (item) => item.filter_only_angulated_tip === angulatedTip
      );
      this.setState({ catheterData: result });
    }
    if (diameters[0] > 0 || diameters[1] <= 2.5) {
      result = result.filter(
        (item) =>
          parseInt(item.filter_numeric_tip_od) >= diameters[0] &&
          parseInt(item.filter_numeric_tip_od) <= diameters[1]
      );
      this.setState({ catheterData: result });
    }
    if (selectedLength.length > 0) {
      result.forEach((item) => {
        selectedLength.forEach((wire) => {
          if (
            item.available_lengths.includes(wire) &&
            !lengthResult.includes(item)
          ) {
            lengthResult.push(item);
          }
        });
      });
      result = lengthResult;
      this.setState({ catheterData: result });
    }
    if (dualLumen !== '') {
      result = result.filter(
        (item) => item.filter_only_dual_lumen === dualLumen
      );
      this.setState({ catheterData: result });
    }
    if (selectedCatheterManufactures.length > 0) {
      result.forEach((item) => {
        if (selectedCatheterManufactures.includes(item.manufacturer)) {
          filteredResult.push(item);
        }
      });
      this.setState({ catheterData: filteredResult });
    }
    // this.setState({showFilter: false});
    this.setState(
      {
        catheterFilterApplied: {
          crossProfile: selectedCrossProfile,
          availableLengths: selectedLength,
          angulatedTip: angulatedTip,
          dualLumen: dualLumen,
          catheterManufacturers: selectedCatheterManufactures,
          searchValue: searchValue,
        },
        showFilter: false,
        showCatheterCount: true,
      },
      () => {
        if (searchValue.length) this.handleSearch(false, searchValue);
      }
    );
  }

  async handleFilter() {
    this.setState(
      {
        isFiltering: true,
        showFilter: false,
        pageGuidewiresFilter: 1, // Reset the page to 1 when applying filter
        pageCathetersFilter: 1, // Reset the catheter page to 1 as well
      },
      () => {
        // Call fetchDataFilter after the state has been updated
        this.fetchDataFilter();
      }
    );
  }

  async handleSearch(isValue, searchValue) {
    const { catheter } = this.state;
    this.setState({
      searchValue: searchValue,
      isSearching: true,
      noResultsFound: false,
      pageCatheters: 1,
      pageGuidewires: 1,
      pageCathetersSearch: 1,
      pageGuidewiresSearch: 1,
      pageCathetersFilter: 1,
      pageGuidewiresSearch: 1,
      guidewiresDataSearch: [],
      catheterDataSearch: [],
    });
    this.fetchDataSearch();
  }

  async saveSearch(key, value) {
    let values = [];
    values = this.state.searches;
    if (!values.includes(value)) {
      if (values.length === 6) {
        try {
          values.unshift(value);
          values.pop();
          await this.setItem(key, values);
          this.setState({ searches: values });
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          values.unshift(value);
          await this.setItem(key, values);
          this.setState({ searches: values });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  async setItem(key, value) {
    console.log('Set_Item:::');
    try {
      const item = JSON.stringify(value);
      return await AsyncStorage.setItem(key, item);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getItem(key) {
    try {
      let result = await AsyncStorage.getItem(key);
      return JSON.parse(result);
    } catch (e) {
      throw e;
    }
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
      this.setState({ searches: [] });
    } catch (e) {
      throw e;
    }
  }

  handleClearSearch() {
    this.setState(
      {
        isSearch: false,
        isSearching: false,
        showLibraryCount: false,
        showCatheterCount: false,
        data: this.state.data,
        catheterData: this.state.catheterData,
        searchValue: '',
        libData: [],
        cathData: [],
        noResultsFound: false,
        pageCatheters: 1,
        pageGuidewires: 1,
        pageCathetersSearch: 1,
        pageGuidewiresSearch: 1,
        pageCathetersFilter: 1,
        pageGuidewiresSearch: 1,
      },
      () => {
        this.fetchData();
        if (this.state.filterApplied != null) this.handleFilter();
        if (this.state.catheterFilterApplied != null)
          this.handleCatheterFilter();
      }
    );
    Keyboard.dismiss();
  }

  resetLibraryFilter() {
    this.setState(
      {
        selectedManufactures: [],
        selectedCoreMaterials: [],
        selectedWireLength: [],
        selectedTipCoating: '',
        coreTapping: '',
        polymerCover: '',
        filterApplied: null,
        data: this.state.data,
        rangeValues: [0, 40],
        showFilter: false,
        showLibraryCount: false,
        isFiltering: false,
        noResultsFound: false,
        pageCatheters: 1,
        pageGuidewires: 1,
        pageCathetersSearch: 1,
        pageGuidewiresSearch: 1,
        pageCathetersFilter: 1,
        pageGuidewiresSearch: 1,
      },
      () => {
        if (this.state.searchValue.length)
          this.handleSearch(false, this.state.searchValue);
      }
    );
  }

  resetCatherFilter() {
    this.setState(
      {
        // catheterData: cathData.length > 0 ?  cathData : catheterItems,
        catheterData: this.state.catheterData,
        selectedCatheterManufactures: [],
        selectedCrossProfile: [],
        selectedLength: [],
        angulatedTip: '',
        dualLumen: '',
        diameters: [0, 2.5],
        catheterFilterApplied: null,
        showFilter: false,
        showCatheterCount: false,
        isFiltering: false,
        noResultsFound: false,
        pageCatheters: 1,
        pageGuidewires: 1,
        pageCathetersSearch: 1,
        pageGuidewiresSearch: 1,
        pageCathetersFilter: 1,
        pageGuidewiresSearch: 1,
      },
      () => {
        if (this.state.searchValue.length)
          this.handleSearch(false, this.state.searchValue);
      }
    );
  }

  handleTab = (tab) => {
    const { catheter } = this.state;

    if (catheter !== tab) {
      this.setState(
        {
          catheter: tab, // Switch the tab
          isLoadingMoreGuidewires: false, // Reset loading states for guidewires
          isLoadingMoreCatheters: false, // Reset loading states for catheters
          // isSearching: false, // Reset search states
        },
        () => {
          // Ensure the right data is displayed after switching tabs
          if (tab && this.state.catheterData.length === 0) {
            // If switching to catheters and no data has been fetched yet
            this.fetchData();
          } else if (!tab && this.state.guidewiresData.length === 0) {
            // If switching to guidewires and no data has been fetched yet
            this.fetchData();
          }
        }
      );
    }
  };

  render() {
    let { navigation } = this.props;
    let {
      isSearch,
      showFilter,
      data,
      searches,
      searchValue,
      showLibraryCount,
      showCatheterCount,
      catheter,
      catheterData,
      isSearching,
      filterApplied,
      catheterFilterApplied,
      isLoadingMore,
      guidewiresData,
      isFiltering,
      noResultsFound,
      guidewiresDataSearch,
      catheterDataSearch,
    } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={library.container}
      >
        <StatusBar style="auto" />
        {!showFilter && (
          <>
            <View
              style={[
                constants.row,
                {
                  justifyContent: 'space-between',
                  marginTop: 50,
                  alignItems: 'center',
                },
              ]}
            >
              <Text style={library.title}>{'Wire Library'}</Text>
              <TouchableOpacity
                onPress={(event) =>
                  this.setState({ showFilter: !showFilter, isSearch: false })
                }
              >
                {((catheter && catheterFilterApplied == null) ||
                  (!catheter && filterApplied == null)) && (
                  <Feather name="filter" size={24} color={darkPurple} />
                )}
                {((catheter && catheterFilterApplied) ||
                  (!catheter && filterApplied)) && (
                  <Fontisto name="filter" size={20} color={darkPurple} />
                )}
              </TouchableOpacity>
            </View>

            <View style={[constants.row, library.topMenu]}>
              <TouchableOpacity onPress={() => this.handleTab(false)}>
                <View style={catheter ? library.button2 : library.button}>
                  <Text
                    style={catheter ? library.textButton2 : library.textButton}
                  >
                    {'Guidewires'}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.handleTab(true)}>
                <View style={catheter ? library.button : library.button2}>
                  <Text
                    style={catheter ? library.textButton : library.textButton2}
                  >
                    {'Catheters'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={[library.input, { backgroundColor: white }]}>
              <TextInput
                value={searchValue}
                onFocus={(e) => this.setState({ isSearch: true })}
                onChangeText={(text) => {
                  this.setState({ searchValue: text, isSearch: true });
                  // if (text.length > 2) this.handleSearch(true, text);
                  // else if (!text.length) this.handleClearSearch(true, text);
                }}
                // onChangeText={text => {
                //     // this.setState({searchValue: text}, () => this.handleSearch(true));
                //     this.setState(previousState => ({
                //         searchValue: text,
                //     }), () => this.handleSearch(true));
                // }}
                style={[library.inputText, { color: darkPurple }]}
                placeholder={'Search Library'}
              />
              {!isSearch && searchValue.length <= 0 ? (
                <TouchableOpacity
                  onPress={this.handleSearch.bind(this)}
                  style={library.searchButton}
                >
                  <FontAwesome name="search" size={24} color={white} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.handleClearSearch.bind(this)}>
                  <AntDesign name="closecircleo" size={24} color={darkPurple} />
                </TouchableOpacity>
              )}
            </View>
            {/* {isSearching && (
              <ActivityIndicator size="large" color={darkPurple} />
            )} */}
            {noResultsFound && isFiltering && (
              <Text style={library.h1}>No results found</Text>
            )}
            {isSearching && !catheter && (
              <Text style={library.h1}>
                {guidewiresDataSearch.length} Records Found
              </Text>
            )}
            {isSearching && catheter && (
              <Text style={library.h1}>
                {catheterDataSearch.length} Records Found
              </Text>
            )}
            {/* {!isSearching && catheter && (
              <Text style={library.h1}>
                {catheterDataSearch.length} Records Found
              </Text>
            )} */}
            {!isSearching && !isFiltering && (
              <>
                {!catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.guidewiresData}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreGuidewires} // Load more guidewires
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreGuidewires ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
                {catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.catheterData}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreCatheters} // Load more catheters
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreCatheters ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
              </>
            )}
            {isSearching && !isFiltering && (
              <>
                {!catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.guidewiresDataSearch}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreGuidewiresSearch} // Load more guidewires
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreGuidewiresSearch ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
                {catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.catheterDataSearch}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreCathetersSearch} // Load more catheters
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreCathetersSearch ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
              </>
            )}
            {/* {!isFiltering && (
              <>
                {!catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.guidewiresDataFilter}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreGuidewiresFilter} // Load more guidewires
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreGuidewiresFilter ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
                {catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.catheterDataFilter}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreCathetersFilter} // Load more catheters
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreCathetersFilter ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
              </>
            )} */}
            {isFiltering && (
              <>
                {!catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.guidewiresDataFilter}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreGuidewiresFilter} // Load more guidewires
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreGuidewiresFilter ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
                {catheter && (
                  <FlatList
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: '30%',
                    }}
                    data={this.state.catheterDataFilter}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMoreCathetersFilter} // Load more catheters
                    onEndReachedThreshold={0.5} // Trigger when 50% of the list has been scrolled
                    ListFooterComponent={() =>
                      this.state.isLoadingMoreCathetersFilter ? (
                        <ActivityIndicator size="large" color={darkPurple} />
                      ) : null
                    }
                  />
                )}
              </>
            )}
          </>
        )}

        {isSearch && (
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={async (event) => {
                Keyboard.dismiss();
                await this.handleSearch(false, searchValue);
              }}
              style={library.searchButtonPosition}
            >
              <View style={library.searchBottomButton}>
                <Text style={library.searchButtonText}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {showFilter && !catheter && this.renderFilter()}
        {showFilter && catheter && this.renderCatheterFilter()}
        {!showFilter && !isSearch && (
          <Menu onResponse={handleResponse(navigation, 1)} />
        )}
      </KeyboardAvoidingView>
    );
  }
}
