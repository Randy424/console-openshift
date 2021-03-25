// tslint:disable
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * SecretVolumeSource adapts a Secret into a volume.
 * @export
 * @interface V1SecretVolumeSource
 */
export interface V1SecretVolumeSource {
  /**
   * Specify whether the Secret or it\'s keys must be defined +optional
   * @type {boolean}
   * @memberof V1SecretVolumeSource
   */
  optional?: boolean;
  /**
   * Name of the secret in the pod\'s namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret +optional
   * @type {string}
   * @memberof V1SecretVolumeSource
   */
  secretName?: string;
}