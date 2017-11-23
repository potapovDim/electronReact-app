"use strict"

const template = process.env.NODE_ENV === 'production' 
        ? '/index.production.html' 
        : '/index.develop.html'
const app = process.env.NODE_ENV === 'production' 
        ? require('app')
        : require('electron').app
const BrowserWindow =  process.env.NODE_ENV === 'production' 
        ? require('browser-window')
        : require('electron').BrowserWindow

let mainWindow = null

const initApp = () => {

  app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
      app.quit()
    }
  })
  app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    mainWindow.loadURL('file:///' + __dirname + template)
    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }
)}
initApp()