// Verified Credential data model - https://www.w3.org/TR/vc-data-model/
// Refer to samplevc.json for more details
const vc = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  id: "",
  type: [],
  issuer: "",
  issuanceDate: "",
  expirationDate: "",

  credentialSubject: {
    id: "",
    name: "",
    document: {
      type: "",
      format: "",
      url: "",
      digest: {
        alg: "",
        value: ""
      },
      signatureType: "",
      issuedOn: ""
    }
  },
  proof: {
    type: "",
    created: "",
    proofPurpose: "",
    verificationMethod: "",
    jws: ""
  }
}

export default vc