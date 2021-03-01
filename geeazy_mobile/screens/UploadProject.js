import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

import Fire from '../Fire';

const firebase = require('firebase');
require("firebase/firestore");

export default class UploadProject extends React.Component {
    
        state = {
            workType: "",
            projectName: "",
            projectDesc: "",
            budget: 0,
            city: "",
            contactInfo: "",
        };

        handlePost = () => {
            Fire.shared.addPost({workType: this.state.workType.trim(), projectName: this.state.projectName.trim(), projectDesc: this.state.projectDesc.trim(), budget: this.state.budget, city: this.state.city.trim(), contactInfo: this.state.contactInfo.trim(),}).then(ref => {
                this.setState({workType: "", projectName: "", projectDesc: "", budget: 0, city: "", contactInfo: ""})
                this.props.navigation.goBack()
            })
            .catch(error => {
                alert(error)
            });
        }
    

    render() {
        return(
        <View style={styles.container}>
            
            <Text style={styles.title}>Add New Project</Text>

            

            
              
            <TextInput
                style={styles.textBox}
                onChangeText={workType => this.setState({workType})}
                value={this.state.workType}
                placeholder="What type of work do you require?" />

            <TextInput
                style={styles.textBox}
                onChangeText={projectName => this.setState({projectName})}
                value={this.state.projectName}
                placeholder="Project Name" />
            <TextInput
                style={styles.textBox}
                onChangeText={projectDesc => this.setState({projectDesc})}
                value={this.state.projectDesc}
                placeholder="Describe your project here..." />
            <TextInput
                keyboardType="numeric"
                style={styles.textBox}
                onChangeText={budget => this.setState({budget})}
                value={this.state.budget}
                placeholder="Enter Budget price here" />
            <TextInput
                style={styles.textBox}
                onChangeText={contactInfo => this.setState({contactInfo})}
                value={this.state.contactInfo}
                placeholder="Enter your email address or phone number"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.handlePost}
                    style={{ ...styles.button, marginVertical: 0 }}>
                    <Text style={styles.buttonText}>Upload Project</Text>
                </TouchableOpacity>

            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 50,
        marginTop: 70
    },
    textBox: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "rgba(0,0,0,0.3)",
        marginBottom: 15,
        fontSize: 18,
        padding: 10
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        borderRadius: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
        backgroundColor: "gray",
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
})