const formatDownloadNum = (download) => {
    const formatter = Intl.NumberFormat('en', {notation: 'compact', maximumFractionDigits: 0}).format(download);
    return formatter;
}

export {formatDownloadNum};