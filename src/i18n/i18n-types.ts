// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'cs'

export type Locales =
	| 'cs'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​!​ ​P​l​e​a​s​e​ ​l​e​a​v​e​ ​a​ ​s​t​a​r​ ​i​f​ ​y​o​u​ ​l​i​k​e​ ​t​h​i​s​ ​p​r​o​j​e​c​t​:​ ​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​i​v​a​n​h​o​f​e​r​/​t​y​p​e​s​a​f​e​-​i​1​8​n
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
}

export type TranslationFunctions = {
	/**
	 * Hi {name}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n
	 */
	HI: (arg: { name: string }) => LocalizedString
}

export type Formatters = {}
