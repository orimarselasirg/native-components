/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';
import { RenderItemHeader } from '../components/ItemHeader';
import { styles } from '../theme/globalTheme';
import { ThemeContext } from '../context/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin', 'Superman', 'Robin', 'rmairo', 'Robin', 'Superman', 'Robin', 'Superman', 'Robin', 'Superman', 'Robin', 'Superman', 'Robin' ],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman','Antman', 'Thor', 'Spiderman','Antman', 'Thor', 'Spiderman','Antman', 'Thor', 'Spiderman','Antman', 'Thor', 'Spiderman','Antman', 'Thor', 'Spiderman','Antman', 'Thor', 'Spiderman','Antman' ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Goku', 'Saitama' ],
  },
];


const Item = (item:string, backgroundColor: string, color: string) => {
  return (
    <View>
      <Text style={{...stylesComp.sectionList, backgroundColor: backgroundColor, color: color}}>{item}</Text>
    </View>
  );
};

const SectionHeader = (section:Casas, backgroundColor: string) => {
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <RenderItemHeader title={section.casa}/>
    </View>
  );
};

const SectionFooter = (section:Casas, backgroundColor: string) => {
  return (
    <View style={{...stylesComp.footerSection, backgroundColor: backgroundColor}}>
      <Text>Total de personajes: {section.data.length}</Text>
    </View>
  );
};

const itemSeparator = (borderColor: string) => {
  return (
    <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 7, borderColor: borderColor}}/>
    );
  };

  export const SectionListScreen = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.globaMagin}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={()=> <RenderItemHeader title="Section List"/>}
        ListFooterComponent={()=> <RenderItemHeader title={`Total de casas: ${casas.length}`}/>}
        renderItem={({item}) => Item(item, theme.colors.background, theme.colors.text)}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section})=> SectionHeader(section, theme.colors.background)}
        renderSectionFooter={({section})=> SectionFooter(section, theme.colors.background)}
        // ItemSeparatorComponent={itemSeparator}
        SectionSeparatorComponent={()=>itemSeparator(theme.dividerColor)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};



const stylesComp = StyleSheet.create({
  sectionList : {
    fontSize: 15,
    color: 'black',
    marginVertical: 5,
  },
  footerSection: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});


