import settings from '../../configuration/settings'
import { findProperty } from 'services/utils'

export default class Settings {
    static getValue(path) {
        return findProperty(settings, path);
    }
}