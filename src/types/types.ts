export interface IpAddressResponseInterface {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: number
  }
  as: {
    asn: number
    name: string
    route: string
    domain: string
    type: string
  }
  isp: string
}
export interface LocationInterface {
  lat: number
  lng: number
}
export interface InformationLocationInterface {
  ipAddress: string
  location: string
  timezone: string
  isp: string
}
