require('dotenv').config()

const AWS = require('aws-sdk')

const s3 = new AWS.S3({signatureVersion: 'v4', region: 'eu-west-2', accessKeyId: process.env.AWSKEY, secretAccessKey: process.env.AWSSECRET})

const myFile = 'uploads/1548475713387_test.txt'
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: process.env.AWSBUCKET,
    Key: myFile,
    Expires: signedUrlExpireSeconds
})

console.log(url)
