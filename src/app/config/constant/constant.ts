import { Component, Injectable } from '@angular/core';

@Injectable()
export class CONSTANT {
  public static readonly BASE_URL = "http://192.168.1.18:8080/api/v1";

  public static readonly TEST_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE2OTcwMjEwNTQsImV4cCI6MTY5NzAyMjQ5NH0.L4pfU2DxKw7WI8W_hAIDyyyLJwh4j5duuH2P3Kx6GKs";
}
