export type AuthState = {
  auth: {
    isOrgRepresent: boolean
    organizationData: any[]
    isSecondAuth: {
      userEmail: null | string,
      userPhoneNumber: null | string,
      fullName: null | string,
      password: null | string
    }
  }
}